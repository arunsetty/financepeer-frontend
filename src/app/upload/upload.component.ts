import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';
import {AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  // uploadDetails: any = {}
  userDetails: any = {};

  constructor(
    private service: ServicesService, private http :HttpClient, private router : Router
  ) { }

  ngOnInit(): void {
    this.userDetails = localStorage.getItem('userDetails') as string;
    this.userDetails = JSON.parse(this.userDetails);
    if(!this.userDetails){
      this.router.navigate(['/login']);
    }
  }

  @ViewChild("myNameElem") myNameElem: ElementRef;
  getValue() {
    console.log(this.myNameElem);
    this.myNameElem.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
  }

  @ViewChild("import") import: ElementRef;
  @ViewChild("selectFiles") selectFiles: ElementRef;
  @ViewChild("result") result: ElementRef;
  function() {
    var files = this.selectFiles.nativeElement.files;
    console.log(files);
    if (files.length <= 0) {
      return false;
    }
  
    var fr = new FileReader();

    var res:any;
  
    fr.onload = function(e) {
      console.log(e);
      var result = JSON.parse(e.target!.result!.toString());
      var formatted = JSON.stringify(result, null, 2);
      result.value = formatted;
      // console.log(result);
      localStorage.setItem('uploadDetails', JSON.stringify(result));
    }
  
    fr.readAsText(files.item(0));

    // console.log(localStorage.getItem('uploadDetails'));
    this.uploadDetails(localStorage.getItem('uploadDetails'));
  };

  uploadDetails(json: any) {
    console.log(json);
    this.service.uploadJson(json).subscribe(data => {
      alert("Details Entered Successfully");
      this.router.navigate(['/']);
      console.log("Response::"+JSON.stringify(data));
    }, 
    error => {
      alert("Can't enter data");
      this.router.navigate(['/upload']);
      console.log("Response::"+JSON.stringify(error));
    });
  }
}
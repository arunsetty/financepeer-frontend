import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  jsonDetails: any;

  constructor(
    private service: ServicesService, private http :HttpClient, private router : Router
  ) { }

  ngOnInit(): void {
    this.getDetails();
  }

  getDetails(){
    this.service.getDetails().subscribe(data => {
      console.log(data);
      localStorage.setItem('details', JSON.stringify(data));
      this.jsonDetails = localStorage.getItem('details') as string;
      this.jsonDetails = JSON.parse(this.jsonDetails);
    });
  }

}

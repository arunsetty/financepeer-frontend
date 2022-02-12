import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userDetails:any = {};

  constructor(
    private service: ServicesService, private http :HttpClient, private router : Router
  ) { }

  ngOnInit(): void {
  }

  // Login(){
  //   console.log(this.userDetails);
  //   this.service.login(this.userDetails.email, this.userDetails.password).subscribe(data => {
  //     alert("Logged in Successfully");
  //     this.router.navigate(['/upload']);
  //     localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
  //     console.log("Response::"+JSON.stringify(data));
  //   }, 
  //   error => {
  //     alert("Can't find account with the email id. Please register first.");
  //     this.router.navigate(['/register']);
  //     console.log("Response::"+JSON.stringify(error));
  //   });
  // }

  Login(){
    console.log(this.userDetails);
    this.service.login(this.userDetails.email, this.userDetails.password).subscribe(data => {
      if(data){
        var userData = JSON.stringify(data);
        console.log("DATA retrieved is ::"+userData);
        if (Object.keys(data).length==0) {
          alert("Can't find account with the email id. Please register first.");
          this.router.navigate(['/register']);
        }
        else{
          alert("Logged in Successfully");
          localStorage.setItem('userDetails', JSON.stringify(data));
          this.router.navigate(['/upload']);
          console.log("Response::"+JSON.stringify(data));
        }
      }
    });
  }

}
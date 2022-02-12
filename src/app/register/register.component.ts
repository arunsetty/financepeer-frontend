import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userDetails:any = {};

  constructor(
    private service: ServicesService, private http :HttpClient, private router : Router
  ) { }

  ngOnInit(): void {
  }

  Register(){
    console.log(this.userDetails);
    this.service.Register(this.userDetails).subscribe(data => {
      alert("Details Entered Successfully");
      this.router.navigate(['/upload']);
      localStorage.setItem('userDetails', JSON.stringify(this.userDetails));
      console.log("Response::"+JSON.stringify(data));
    }, 
    error => {
      alert("Email already in use, please choose another email.");
      this.router.navigate(['/register']);
      console.log("Response::"+JSON.stringify(error));
    });
  }

}

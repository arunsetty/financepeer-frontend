import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicesService } from '../services.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userDetails:any;

  constructor(
    private service: ServicesService, private http :HttpClient, private router : Router
  ) { }

  ngOnInit(): void {
    // this.userDetails = localStorage.getItem('userDetails') as string;
    // this.userDetails = JSON.parse(this.userDetails);
    // if (!localStorage.getItem('foo')) { 
    //   localStorage.setItem('foo', 'no reload') 
    //   location.reload() 
    // } else {
    //   localStorage.removeItem('foo') 
    // }
    this.getUser();
  }

  getUser(){
    this.userDetails = localStorage.getItem('userDetails') as string;
    this.userDetails = JSON.parse(this.userDetails);
  }

  logout(){
    alert("Logged out successfully");
    localStorage.removeItem('userDetails');
    this.router.navigate(['/']);
  }

}

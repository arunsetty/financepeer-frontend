import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(
    private http: HttpClient,
  ) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Database details : ladecah587@petloca.com

  Register(data: any){
    return this.http.post('http://localhost:3000/register', JSON.stringify(data), this.httpOptions);
  }

  uploadJson(data: any){
    return this.http.post('http://localhost:3000/upload', data, this.httpOptions);
  }

  getDetails(){
    return this.http.get('http://localhost:3000/details');
  }

  login(email: string, password: string){
    return this.http.get('http://localhost:3000/login/'+email+'/'+password);
  }
}

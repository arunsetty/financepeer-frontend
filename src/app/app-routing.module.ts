import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UploadComponent } from './upload/upload.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'upload', component: UploadComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: '', component: HomepageComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

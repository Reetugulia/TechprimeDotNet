import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { HttpserviceService } from '../httpservice.service';
 
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  providers:[HttpserviceService],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  builder=inject(FormBuilder);
  color:string="";
  httpservice=inject(HttpserviceService)
  router=inject(Router)
  loginForm=this.builder.group({
    email:['',Validators.required],
    password:['',Validators.required]
  });
   
  onlogin(){
    const email=this.loginForm.value.email!;
    const password=this.loginForm.value.password!;
     this.httpservice.login(email,password).subscribe((result)=>{
       console.log(result);
       localStorage.setItem("token",result.token);
       this.router.navigate(['/create project']);
   })
    
   
  }



}

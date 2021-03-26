import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
messageError='';
  constructor(private sa:AuthService ,private route:Router) { }

  ngOnInit(): void {
  }
  login(f:any){
    let data=f.value;
    this.sa.signIn(data.email,data.password).then(()=>{
      console.log("login")
      this.route.navigate(['/home']);
    }
    ).catch(()=>{
      console.log("error")
    this.messageError="incorect email or password";
    }
    )
  }



}

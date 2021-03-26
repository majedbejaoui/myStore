import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private sa:AuthService) { }

  ngOnInit(): void {
  }
  register(f:any){
    //console.log(f.value);
    let data=f.value;
    this.sa.signUp(data.email,data.password).then(()=>{console.log("donne")}
    ).catch(()=>{console.log("error")}
    )
  }

}



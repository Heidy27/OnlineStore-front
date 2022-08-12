import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import axios from 'axios';
import { Router } from '@angular/router';

type UserResponse = {
  status: string;
  token: string;
  user: UserObj;
};

type UserObj = {
  id: string,
  userName: string,
  email: string,
  role: string
  enabled: Boolean
  
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
  
})

export class LoginComponent implements OnInit {
  messageclass = ''
  message = ''
  customerid: any;
  editdata: any;
  responsedata: any;
  constructor() {
      localStorage.clear();
     }
     Login = new FormGroup({
      userName: new FormControl("",Validators.required),
      password: new FormControl("",Validators.required),
     });

  ngOnInit(): void {
  }

  //  proceedLogin {
  //   if(this.Login.valid)
  //  }
  
  async test(user: any,pass: any): Promise<void> {

  const { data } = await axios.post<UserResponse>(
    'https://localhost:3002/api/v1/Users/login',
    { userName: user, password: pass },
    {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    },
  );

  }
  
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  username = "username";

  constructor() { }

  ngOnInit(): void {
  }

  resetUsername(){
    this.username = "username";
  }

  isInputEmpty(){
    return this.username.length > 0;
  }


}

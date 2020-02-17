import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {
  userName = "username";
  emptyUserName = false;
  constructor() { }

  ngOnInit(): void {
  }

  ontype(){
    this.userName = (<HTMLInputElement>event.target).value;
  }

  emptyInput(){
    if(this.userName == ""){
      return true;
    }
    return false;
  }


}

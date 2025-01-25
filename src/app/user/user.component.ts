import { Component } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  
  user = DUMMY_USERS[randomUser];
  
  get imageUrl() {
    return `assets/users/${this.user.avatar}`;
  }

  get username() {
    return this.user.name;
  }

  onUserClick() {
    const randomUser = Math.floor(Math.random()*DUMMY_USERS.length);
    this.user = DUMMY_USERS[randomUser];
  }
}

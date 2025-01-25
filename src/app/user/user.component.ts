import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUser = Math.floor(Math.random()*DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  
  user = signal(DUMMY_USERS[randomUser]);
  imageUrl = computed(() => `assets/users/${this.user().avatar}`);
  username = computed(() => this.user().name);

  onUserClick() {
    const randomUser = Math.floor(Math.random()*DUMMY_USERS.length);
    this.user.set(DUMMY_USERS[randomUser]);
  }
}

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { User } from './user.model';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required : true}) user!: User;
  @Input({ required : true}) selected! : boolean;
  @Output() select = new EventEmitter<string>();
  
  get imagePath () {
    return `assets/users/${this.user.avatar}`;
  }

  onUserClick() {
    this.select.emit(this.user.id);
  }
}

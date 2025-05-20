import { Component, EventEmitter, Input, Output } from '@angular/core';
import { data } from '../dummy-data/user.json';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * data.length);

@Component({
  selector: 'app-user',
  standalone: false,
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) data!: User;
  @Input({ required: true }) isActive!: boolean;
  @Output() select = new EventEmitter<string>();

  get imgPath() {
    return 'assets/users/' + this.data.avatar;
  }

  onSelectUser() {
    this.select.emit(this.data.id);
  }
}

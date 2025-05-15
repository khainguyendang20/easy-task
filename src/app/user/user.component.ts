import { Component, Input } from '@angular/core';
import { data } from '../dummy-data/user.json';
import { User } from './user.model';

const randomIndex = Math.floor(Math.random() * data.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  @Input({ required: true }) data!: User;
  selectedUser = data[randomIndex];

  get imgPath() {
    return '/assets/users/' + this.data.avatar;
  }
}

import { Component } from '@angular/core';
import { data } from './dummy-data/user.json';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-basic';
  listUsers = data;
  activeUserId!: string;

  get selectedUser(): User {
    return this.listUsers.find((user) => user.id === this.activeUserId) as User;
  }

  onSelectUser(id: string) {
    this.activeUserId = id;
  }
}

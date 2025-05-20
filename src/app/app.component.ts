import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { data } from './dummy-data/user.json';
import { TasksComponent } from './tasks/tasks.component';
import { User } from './user/user.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, UserComponent, TasksComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  title = 'angular-basic';
  listUsers = data;
  activeUserId?: string;

  get selectedUser(): User {
    return this.listUsers.find((user) => user.id === this.activeUserId) as User;
  }

  onSelectUser(id: string) {
    this.activeUserId = id;
  }
  constructor() {
    console.log(data);
  }
}

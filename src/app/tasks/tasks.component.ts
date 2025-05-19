import { Component } from '@angular/core';
import { HeadingComponent } from '../shared/components/heading/heading.component';
import { ButtonComponent } from '../shared/components/button/button.component';
import { TaskComponent } from './task/task.component';

@Component({
  selector: 'app-tasks',
  imports: [HeadingComponent, ButtonComponent, TaskComponent],
  standalone: true,
  templateUrl: './tasks.component.html',
  styles: ``,
})
export class TasksComponent {}

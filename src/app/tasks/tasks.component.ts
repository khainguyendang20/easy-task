import { Component, inject, Input } from '@angular/core';
import { User } from '../user/user.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
})
export class TasksComponent {
  @Input({ required: true }) user!: User;
  isAddingNewTask = false;
  private tasksService = inject(TasksService);

  get tasksByUserId() {
    return this.tasksService.getTasksByUserId(this.user.id);
  }

  onAddNewTask() {
    this.isAddingNewTask = true;
  }

  onCloseNewTask() {
    this.isAddingNewTask = false;
  }
}

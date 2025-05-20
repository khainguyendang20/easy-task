import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styles: ``,
})
export class NewTaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() close = new EventEmitter<boolean>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
  }
  onSubmit() {
    this.close.emit(true);
    const payload = {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    };
    this.tasksService.addNewTask(payload, this.userId);
    this.close.emit();
  }
}

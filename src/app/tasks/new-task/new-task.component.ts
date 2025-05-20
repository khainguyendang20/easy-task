import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { HeadingComponent } from '../../shared/components/heading/heading.component';
import { FormsModule } from '@angular/forms';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [HeadingComponent, FormsModule],
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

import { Component } from '@angular/core';
import { ButtonComponent } from '../../shared/components/button/button.component';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './task.component.html',
  styles: ``,
})
export class TaskComponent {}

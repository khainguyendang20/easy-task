import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: false,
  templateUrl: './heading.component.html',
  styles: ``,
})
export class HeadingComponent {
  @Input() className?: string;
}

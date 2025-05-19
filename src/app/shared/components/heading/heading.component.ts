import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-heading',
  imports: [NgClass],
  templateUrl: './heading.component.html',
  styles: ``,
})
export class HeadingComponent {
  @Input() className?: string;
}

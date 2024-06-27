import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-badges-box',
  standalone: true,
  imports: [],
  templateUrl: './badges-box.component.html',
  styleUrl: './badges-box.component.scss',
})
export class BadgesBoxComponent {
  @Input() activeContent!: number;
}

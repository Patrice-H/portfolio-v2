import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-button-row',
  standalone: true,
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './button-row.component.html',
  styleUrl: './button-row.component.scss',
})
export class ButtonRowComponent implements OnInit {
  @Input() number_of_buttons!: number;
  @Output() contentChange: EventEmitter<number> = new EventEmitter();
  buttons!: any[];
  content!: number;

  ngOnInit(): void {
    this.buttons = new Array(this.number_of_buttons);
    this.content = 0;
    this.buttons[0] = 'active-btn';
  }

  displayContent(n: number) {
    this.content = n;
    this.contentChange.emit(this.content);
    this.resetButtons();
    const id = 'frame-' + n;
    const button = document.getElementById(id)
    button?.classList.add('active-btn');
  }

  resetButtons() {
    for(let i = 0; i < 4; i++) {
      const id = 'frame-' + i;
      const button = document.getElementById(id)
      button?.classList.remove('active-btn');
    }
  }
}

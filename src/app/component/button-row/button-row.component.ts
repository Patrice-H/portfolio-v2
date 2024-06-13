import { Component } from '@angular/core';
import { CustomButtonComponent } from '../custom-button/custom-button.component';

@Component({
  selector: 'app-button-row',
  standalone: true,
  imports: [CustomButtonComponent],
  templateUrl: './button-row.component.html',
  styleUrl: './button-row.component.scss',
})
export class ButtonRowComponent {}

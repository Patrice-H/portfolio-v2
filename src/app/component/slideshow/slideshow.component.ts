import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ButtonRowComponent } from '../button-row/button-row.component';

@Component({
  selector: 'app-slideshow',
  standalone: true,
  imports: [MatCardModule, ButtonRowComponent],
  templateUrl: './slideshow.component.html',
  styleUrl: './slideshow.component.scss',
})
export class SlideshowComponent {}

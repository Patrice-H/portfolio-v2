import { Component, OnInit } from '@angular/core';
import { SkillsMenuComponent } from '../../component/skills-menu/skills-menu.component';
import { SlideshowComponent } from '../../component/slideshow/slideshow.component';
import { BadgesBoxComponent } from '../../component/badges-box/badges-box.component';
import { ButtonRowComponent } from '../../component/button-row/button-row.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    SkillsMenuComponent,
    SlideshowComponent,
    BadgesBoxComponent,
    ButtonRowComponent,
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  newContent!: number;

  ngOnInit(): void {
    this.newContent = 0;
  }

  changeContent(content: number) {
    this.newContent = content;
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-skills-menu',
  standalone: true,
  imports: [],
  templateUrl: './skills-menu.component.html',
  styleUrl: './skills-menu.component.scss',
})
export class SkillsMenuComponent {
  @Input() activeContent!: number;
}

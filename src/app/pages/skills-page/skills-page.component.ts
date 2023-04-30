import { Component, OnInit } from '@angular/core';
import { skills } from '../../../data/skills';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.scss'],
})
export class SkillsPageComponent implements OnInit {
  activatedPanel!: string;
  conceptionSkills!: any[];
  frontendSkills!: any[];
  backendSkills!: any[];
  designSkills!: any[];

  ngOnInit(): void {
    this.activatedPanel = 'conception';
    this.conceptionSkills = this.getSkills('conception');
    this.frontendSkills = this.getSkills('frontend');
    this.backendSkills = this.getSkills('backend');
    this.designSkills = this.getSkills('design');
  }

  showSkills(skillType: string) {
    const skillBtns = Array.from(
      document.getElementsByClassName('skill-header')
    );
    skillBtns.forEach((button) => {
      if (button.getAttribute('id') === `${skillType}-skills`) {
        button.classList.add('active-skills');
      } else {
        button.classList.remove('active-skills');
      }
    });
    this.activatedPanel = skillType;
  }

  getSkills(type: string): any[] {
    return skills.filter((skill: any) => skill.type === type);
  }
}

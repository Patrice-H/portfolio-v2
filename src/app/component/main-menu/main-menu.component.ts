import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { baseUrl } from '../../service/config';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent implements OnInit{
  tabs: any[] = [
    {
      id: 'home-btn',
      link: '/',
      label: 'Accueil',
      class: '',
    },
    {
      id: 'about-btn',
      link: '/about',
      label: 'A propos',
      class: '',
    },
    {
      id: 'projects-btn',
      link: '/projects',
      label: 'Projets',
      class: '',
    },
    {
      id: 'contact-btn',
      link: '/contact',
      label: 'Contact',
      class: '',
    },
  ];
  displayedMenu: Boolean = false;
  disabledButton: Boolean = true;
  location!: string;

  ngOnInit(): void {
    this.location = window.location.href.split(baseUrl)[1]
    const rightIndex = (element: any) => element.link === this.location;
    const index = this.tabs.findIndex(rightIndex);
    this.tabs.forEach(tab => tab.class = '');
    this.tabs[index].class = 'active-btn';
  }

  displayMenu(): void {
    this.displayedMenu = true;
  }
  hideMenu(): void {
    this.displayedMenu = false;
  }
  activeBtn(id: string): void {
    this.tabs.forEach((tab) => {
      const btn = document.getElementById(tab.id);
      btn?.classList.remove('active-btn');
    });
    const btn = document.getElementById(id);
    btn?.classList.add('active-btn');
  }
}

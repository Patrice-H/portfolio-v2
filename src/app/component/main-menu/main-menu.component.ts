import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule, CommonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent{
  tabs: any[] = [
    {
      id: 'home-btn',
      link: '/',
      label: 'Accueil',
      active: true,
      page: 'home-page',
    },
    {
      id: 'about-btn',
      link: '/about',
      label: 'A propos',
      active: false,
      page: 'about-page',
    },
    {
      id: 'projects-btn',
      link: '/projects',
      label: 'Projets',
      active: false,
      page: 'projects-page',
    },
    {
      id: 'contact-btn',
      link: '/contact',
      label: 'Contact',
      active: false,
      page: 'contact-page',
    },
  ];
  displayedMenu: Boolean = false;
  disabledButton: Boolean = true;

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

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { HomePageComponent } from './page/home-page/home-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ProjectsPageComponent } from './page/projects-page/projects-page.component';
import { MainMenuComponent } from './component/main-menu/main-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    ContactPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
    MainMenuComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'portfolio';
}

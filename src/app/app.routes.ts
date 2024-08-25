import { Routes } from '@angular/router';
import { HomePageComponent } from './page/home-page/home-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ProjectsPageComponent } from './page/projects-page/projects-page.component';

export const routes: Routes = [
  { path: '', component: HomePageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'projects', component: ProjectsPageComponent },
];

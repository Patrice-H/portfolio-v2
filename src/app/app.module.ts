import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutPageComponent } from './pages/about-page/about-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NavbarComponent,
    ContactPageComponent,
    SkillsPageComponent,
    AboutPageComponent,
    ProjectsPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

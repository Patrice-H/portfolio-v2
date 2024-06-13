import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-main-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, MatButtonModule],
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss',
})
export class MainMenuComponent {
  homeBtnLabel: String = 'Accueil';
  aboutBtnLabel: String = 'A propos';
  projectsBtnLabel: String = 'Projets';
  contactBtnLabel: String = 'Contact';

  displayMenu() {
    let elmt = document.getElementById('basic-navbar');

    console.log();
  }
}

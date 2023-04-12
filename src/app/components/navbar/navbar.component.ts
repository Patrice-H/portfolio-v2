import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  displayedMenu!: boolean;

  ngOnInit() {
    this.displayedMenu = false;
  }

  toggleMenu() {
    const menu = Array.from(document.getElementsByTagName('a'));
    menu.forEach((item) => {
      if (item.classList.contains('menu-item')) {
        item.classList.remove('menu-item');
      } else {
        item.classList.add('menu-item');
      }
    });
  }
}

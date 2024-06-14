import { Component } from '@angular/core';
import { ContactFormComponent } from '../../component/contact-form/contact-form.component';
import { SocialNetworksComponent } from '../../component/social-networks/social-networks.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactFormComponent, SocialNetworksComponent],
  templateUrl: './contact-page.component.html',
  styleUrl: './contact-page.component.scss',
})
export class ContactPageComponent {}

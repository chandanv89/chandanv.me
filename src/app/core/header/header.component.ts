import { Component } from '@angular/core';
import { BioService } from '../services/bio.service';
import { HeaderService } from '../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],
})
export class HeaderComponent {
  bio$ = this.bioService.getBio();
  isHome$ = this.headerService.isHome();

  menuItems = [
    {
      title: 'About Me',
      homePath: '/about',
      fragment: 'about',
      pagePath: '/about',
    },
    {
      title: 'Work Experience',
      homePath: '/experience',
      fragment: '',
      pagePath: '/experience',
    },
    {
      title: 'My Projects',
      homePath: '/projects',
      fragment: 'projects',
      pagePath: '/projects',
    },
    { title: 'My Blog', homePath: '/blog', fragment: '', pagePath: '/blog' },
  ];

  constructor(
    private bioService: BioService,
    private headerService: HeaderService
  ) {}
}

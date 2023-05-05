import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';
import { Bio } from 'src/app/core/models/bio';

@Component({
  selector: 'app-blog-landing',
  templateUrl: './blog-landing.component.html',
  styleUrls: ['./blog-landing.component.sass'],
})
export class BlogLandingComponent implements OnInit {
  authorBio!: Bio;

  links$ = this.scully.available$.pipe(
    map((routes) =>
      routes.filter((route: ScullyRoute) => route.route.startsWith('/blog/'))
    )
  );

  respOptions = [
    {
      viewClasses: 'd-none d-md-flex',
      displayInColumn: false,
      titleClasses: 'display-3',
    },
    {
      viewClasses: 'd-flex d-md-none',
      displayInColumn: true,
      titleClasses: '',
    },
  ];

  constructor(private scully: ScullyRoutesService, private http: HttpClient) {}
  ngOnInit(): void {
    this.getBio().subscribe((resp) => (this.authorBio = resp));
  }

  getBio() {
    return this.http.get<Bio>('assets/json/bio.json');
  }
}

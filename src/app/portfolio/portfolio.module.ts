import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ExperienceComponent } from './experience/experience.component';

@NgModule({
  declarations: [HomeComponent, AboutComponent, ProjectsComponent, ExperienceComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}

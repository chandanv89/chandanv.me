import { Component, OnInit } from '@angular/core';
import { Bio } from 'src/app/core/models/bio';
import { Experience } from 'src/app/core/models/experience';
import { BioService } from 'src/app/core/services/bio.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass'],
})
export class ExperienceComponent implements OnInit {
  bio!: Bio;
  experience!: Experience[];

  constructor(private bioService: BioService) {}

  ngOnInit(): void {
    this.bioService.getBio().subscribe((resp) => {
      this.bio = resp;
      this.experience = this.bio.experience;
    });
  }
}

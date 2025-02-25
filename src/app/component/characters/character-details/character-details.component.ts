import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { DisneyService } from '../../../service/disney.service';
import { CharacterModel } from '../../../models/character.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-details',
  imports: [CommonModule, RouterModule],
  templateUrl: './character-details.component.html',
  styleUrl: './character-details.component.css'
})
export class CharacterDetailsComponent {
  character?: CharacterModel;

  constructor(
    private route: ActivatedRoute,
    private disneyService: DisneyService
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.disneyService.getCharacterById(id).subscribe(response => {
        this.character = response;
      });
    }
  }
}

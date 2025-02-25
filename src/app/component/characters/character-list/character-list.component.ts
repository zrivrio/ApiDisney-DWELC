import { Component } from '@angular/core';
import { DisneyService } from '../../../service/disney.service';
import { CharacterModel } from '../../../models/character.model';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-character-list',
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './character-list.component.html',
  styleUrl: './character-list.component.css'
})
export class CharacterListComponent {
  characters: CharacterModel[] = [];
  searchName: string = '';
  page: number = 1;

  constructor(private disneyService: DisneyService) {}

  ngOnInit(): void {
    this.fetchCharacters();
  }

  fetchCharacters(): void {
    this.disneyService.getAllCharacters(this.page).subscribe(response => {
      this.characters = response;
    });
  }

  search(): void {
    if (this.searchName) {
      this.disneyService.searchCharacter(this.searchName).subscribe(response => {
        this.characters = response;
      });
    } else {
      this.fetchCharacters();
    }
  }
}

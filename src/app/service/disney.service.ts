import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { CharacterModel } from '../models/character.model'; 

@Injectable({
  providedIn: 'root'
})
export class DisneyService {
  private apiUrl = 'https://api.disneyapi.dev/character';

  constructor(private http: HttpClient) {}

  getAllCharacters(page: number = 1) {
    return this.http.get<{ data: CharacterModel[] }>(`${this.apiUrl}?page=${page}`).pipe(
      map(response => response.data || [])
    );
  }

  getCharacterById(id: number) {
    return this.http.get<{ data: CharacterModel }>(`${this.apiUrl}/${id}`).pipe(
      map(response => response.data)
    );
  }

  searchCharacter(name: string) {
    return this.http.get<{ data: CharacterModel[] }>(`${this.apiUrl}?name=${name}`).pipe(
      map(response => response.data || [])
    );
  }

}

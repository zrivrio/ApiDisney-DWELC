import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DisneyService {
  private apiUrl = 'https://api.disneyapi.dev';

  constructor(private http: HttpClient) { }

  getCharacters() {
    return this.http.get(`${this.apiUrl}/characters`);
  }

  getCharacterById(id: string){
    return this.http.get(`${this.apiUrl}/characters/${id}`);
  }

  getMovies() {
    return this.http.get(`${this.apiUrl}/movies`);
  }

  getMovieById(id: string){
    return this.http.get(`${this.apiUrl}/movies/${id}`);
  }
}

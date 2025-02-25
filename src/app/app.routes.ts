import { Routes } from '@angular/router';
import { CharacterListComponent } from './component/characters/character-list/character-list.component';
import { MovieListComponent } from './component/movies/movie-list/movie-list.component';
import { CharacterDetailsComponent } from './component/characters/character-details/character-details.component';
import { MovieDetailsComponent } from './component/movies/movie-details/movie-details.component';

export const routes: Routes = [
    {path: '', redirectTo:'/characters', pathMatch: 'full'},
    {path: 'characters', component: CharacterListComponent},
    {path: 'characters/:id', component: CharacterDetailsComponent},
    {path: 'movies', component: MovieListComponent},
    {path: 'movies/:id', component: MovieDetailsComponent}
];

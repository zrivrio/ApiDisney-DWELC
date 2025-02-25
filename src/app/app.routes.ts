import { Routes } from '@angular/router';
import { CharacterListComponent } from './component/characters/character-list/character-list.component';
import { CharacterDetailsComponent } from './component/characters/character-details/character-details.component';

export const routes: Routes = [
    { path: '', component: CharacterListComponent },
    { path: 'character/:id', component: CharacterDetailsComponent }
];

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { catchError, map } from 'rxjs/operators';
import { HomePageModule } from '../../../modules/home-page/home-page.module';
import { Pokemon, pokemonList } from '../../models/pokemon.model';

@Injectable({ 
    providedIn: HomePageModule,
})

export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api/v2/';

  constructor(private http: HttpClient) { }
 
  getPokemonList(offset: number, limit: number): Observable<pokemonList[]> {
    const url = `${this.apiUrl}pokemon-form?offset=${offset}&limit=${limit}`;
    return this.http.get(url).pipe(
      map((response: any) => response.results),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

  

  getPokemonDetails(url: string): Observable<Pokemon> {
    return this.http.get<any>(url).pipe(
      map(response => {
        let pokemon = new Pokemon();
        pokemon.name = response.name;
        pokemon.url = response.pokemon.url;
        pokemon.form_name = response.form_name;
        pokemon.form_names = response.form_names;
        pokemon.form_order = response.form_order;
        pokemon.id = response.id;
        pokemon.is_battle_only = response.is_battle_only;
        pokemon.is_default = response.is_default;
        pokemon.is_mega = response.is_mega;
        pokemon.order = response.order;
        pokemon.sprites = response.sprites;
        pokemon.types = response.types;
        pokemon.version_group = response.version_group;
        return pokemon;
        
      }),
      catchError(error => {
        console.error('Error:', error);
        throw error;
      })
    );
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonDetails, PokemonListRequest } from '../types/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  constructor(private http: HttpClient) {}

  getPokemons(offset: number): Observable<PokemonListRequest> {
    return this.http.get<PokemonListRequest>(
      `https://pokeapi.co/api/v2/pokemon/?limit=10&offset=${offset}`
    );
  }

  getPokemonDetail(identifier: string | number): Observable<PokemonDetails> {
    const details = this.http.get<PokemonDetails>(
      `https://pokeapi.co/api/v2/pokemon/${identifier}`
    );
    return details;
  }
}

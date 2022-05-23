import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/types/pokemon';
import { PokemonsService } from '../../services/pokemons.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  count: number = 0;
  currentPage: number = 0;

  getPokemons(): void {
    const offset = (this.currentPage - 1) * 10;

    this.pokemonService.getPokemons(offset).subscribe(({ count, results }) => {
      this.pokemons = results;
      this.count = count;
    });
  }

  constructor(
    private pokemonService: PokemonsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((paramMap) => {
      this.currentPage = Number(paramMap['page']);
      this.getPokemons();
    });
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() name: string = '';
  number: number = 0;
  imgSrc: string = '';

  constructor(private pokemonService: PokemonsService) {}

  ngOnInit(): void {
    this.getPokemonDetails();
  }

  getPokemonDetails(): void {
    this.pokemonService
      .getPokemonDetail(this.name.toLowerCase())
      .subscribe(({ sprites, id }) => {
        this.imgSrc = sprites.front_default;
        this.number = id;
      });
  }
}

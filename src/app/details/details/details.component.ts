import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonsService } from 'src/app/services/pokemons.service';
import { PokemonStats, PokemonType, Sprites } from 'src/app/types/pokemon';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  id: number = 0;
  name: string = '';
  images: Sprites = {
    back_default: '',
    back_female: '',
    back_shiny: '',
    back_shiny_female: '',
    front_female: '',
    front_default: '',
    front_shiny: '',
    front_shiny_female: '',
  };
  selectedImage: string = '';
  stats: PokemonStats[] = [];
  types: PokemonType[] = [];

  constructor(
    private router: ActivatedRoute,
    private pokemonService: PokemonsService,
    private location: Location
  ) {}

  getPokemonDetail(): void {
    if (this.id === 0) return;
    this.pokemonService
      .getPokemonDetail(this.id)
      .subscribe(({ name, sprites, stats, types }) => {
        this.name = name;
        this.images = sprites;
        this.selectedImage = sprites.front_default;
        this.stats = stats;
        this.types = types;
      });
  }

  selectImage(url: string): void {
    this.selectedImage = url;
  }

  returnToList(): void {
    this.location.back();
  }

  ngOnInit(): void {
    this.router.params.subscribe((paramMap) => {
      this.id = Number(paramMap['id']);
    });

    this.getPokemonDetail();
  }
}

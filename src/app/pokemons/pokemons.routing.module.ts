import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DetailPokemonComponent } from "./detail-pokemon/detail-pokemon.component";
import { EditPokemonComponent } from "./edit-pokemon/edit-pokemon.component";
import { PokemonComponent } from "./list-pokemons/pokemons.component";

const pokemonsRoutes: Routes = [
  {
     path:'pokemon',
     children: [
       {path: 'all', component: PokemonComponent},
       {path: 'edit/:id', component: EditPokemonComponent},
       {path: ':id', component: DetailPokemonComponent}
     ]
  }
];

@NgModule({
  imports:[
    RouterModule.forChild(pokemonsRoutes)
  ],
  exports:[
    RouterModule
  ]

})

export class PokemonsModule{}

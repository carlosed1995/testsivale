import { Component } from '@angular/core'; 
import { PokemonService } from './../../../shared/services/pokemon/pokemon.service';
import { Pokemon, pokemonList } from '../../../shared/models/pokemon.model';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { PokemonModalComponent } from '../pokemon-modal/pokemon-modal.component';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-main-container', 
  templateUrl: './main-container.component.html',
  styleUrl: './main-container.component.css'
})
export class MainContainerComponent implements OnInit {
  private dialogRef: MatDialogRef<PokemonModalComponent, any> | null = null;

  pokemonList: pokemonList[] = [];
  offset = 0;
  limit = 20;

  constructor(private pokemonService: PokemonService, 
              private dialog: MatDialog) { }

  ngOnInit() {
    this.getPokemonList();
  }

  getPokemonList() {
    this.pokemonService.getPokemonList(this.offset, this.limit).subscribe(
      (pokemonList: pokemonList[]) => { 
        this.pokemonList = pokemonList;
      },
      error => { 
        console.error('Error:', error);
      }
    );
  }

  nextPage() {
    this.offset += 20;
    this.getPokemonList();
  }

  previousPage() {
    this.offset = Math.max(this.offset - 20, 0);
    this.getPokemonList();
  }

  openModal(pokemonUrl: string, index: number) { 
    const incrementedIndex = index + 1;
    this.pokemonService.getPokemonDetailsById(incrementedIndex).subscribe(
      (pokemonDetails: Pokemon) => {  
        if (this.dialogRef) {
          this.dialogRef.close();
        }
  
        this.dialogRef = this.dialog.open(PokemonModalComponent, {
          data: { pokemon: pokemonDetails }, 
        });
  
        this.dialogRef.afterClosed().subscribe(result => { 
          // Clear the reference when dialog is closed
          this.dialogRef = null;
        });
      },
      error => { 
        console.error('Error:', error);
      }
    );
  }
}
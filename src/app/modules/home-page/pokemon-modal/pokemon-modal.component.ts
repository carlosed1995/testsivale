import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-pokemon-modal', 
  templateUrl: './pokemon-modal.component.html',
  styleUrls: ['./pokemon-modal.component.css']   
})
export class PokemonModalComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<PokemonModalComponent>
              ) { }

  close(): void {
    this.dialogRef.close();
  }
}
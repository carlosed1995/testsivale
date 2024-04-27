import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { PokemonModalComponent } from './pokemon-modal/pokemon-modal.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageRoutingModule } from './home-page-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PokemonService } from '../../shared/services/pokemon/pokemon.service';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    PokemonModalComponent,
    FooterComponent 
  ],

  imports: [
    MatDialogModule,
    HttpClientModule,
    CommonModule,
    HomePageRoutingModule,
  ],
  providers: [PokemonService], 
})
export class HomePageModule { }

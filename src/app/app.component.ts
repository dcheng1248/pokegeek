import { Component, ViewChild } from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout'
import { RouterOutlet } from '@angular/router';

import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon'

import { PokemonComponent } from './component/pokemon/pokemon.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MatSidenavModule, MatIconModule, PokemonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'pokegeek';


  @ViewChild(MatSidenav) //allows access to sidenav bar
  sidenav!: MatSidenav; //sidenav will not be nullified
 
  constructor(private observer: BreakpointObserver) {} //receives dependencies
 
  ngAfterViewInit() {
  }
}

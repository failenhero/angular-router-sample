import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HeroesRoutingModule} from './heroes-routing.module';
import {HeroListComponent} from "./hero-list/hero-list.component";
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
  declarations: [HeroListComponent, HeroDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {HeroesModule} from "./heroes/heroes.module";
import {CrisisCenterModule} from "./crisis-center/crisis-center.module";
import {ComposeMessageComponent} from './compose-message/compose-message.component';
import {FormsModule} from "@angular/forms";
import {AdminModule} from "./admin/admin.module";
import {AuthModule} from "./auth/auth.module";


@NgModule({
  declarations: [
    PageNotFoundComponent,
    ComposeMessageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HeroesModule,
    CrisisCenterModule,
    AdminModule,
    AuthModule
  ]
})
export class ComponentsModule { }

import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {FormsModule} from "@angular/forms";
import {CrisisCenterRoutingModule} from "./crisis-center.routing.module";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";
import {CrisisDetailComponent} from "./crisis-detail/crisis-detail.component";


@NgModule({
  declarations: [
    CrisisCenterComponent,
    CrisisListComponent,
    CrisisCenterHomeComponent,
    CrisisDetailComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CrisisCenterRoutingModule
  ]
})
export class CrisisCenterModule { }

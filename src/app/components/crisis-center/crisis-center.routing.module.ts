import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CrisisCenterComponent} from "./crisis-center/crisis-center.component";
import {CrisisCenterHomeComponent} from "./crisis-center-home/crisis-center-home.component";
import {CrisisListComponent} from "./crisis-list/crisis-list.component";
import {CrisisDetailComponent} from "./crisis-detail/crisis-detail.component";

const crisesRoutes: Routes = [
  {
    path: 'crisis-center',
    component: CrisisCenterComponent,
    children: [
      {
        path: '',
        component: CrisisListComponent,
        children: [
          {path: '', component: CrisisCenterHomeComponent},
          {path: ':id', component: CrisisDetailComponent}
        ]
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(crisesRoutes)],
  exports: [RouterModule]
})
export class CrisisCenterRoutingModule { }

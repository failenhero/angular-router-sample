import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PageNotFoundComponent} from "./components/page-not-found/page-not-found.component";
import {ComposeMessageComponent} from "./components/compose-message/compose-message.component";

const routes: Routes = [
  {path: '', redirectTo: '/heroes', pathMatch: 'full'},
  {path: 'compose', component: ComposeMessageComponent, outlet: 'popup'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

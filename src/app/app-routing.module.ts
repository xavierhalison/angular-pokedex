import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details/details.component';
import { ListComponent } from './list/list/list.component';

const routes: Routes = [
  { path: 'list/:page', component: ListComponent },
  { path: '', redirectTo: '/list/1', pathMatch: 'full' },
  { path: 'details/:id', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

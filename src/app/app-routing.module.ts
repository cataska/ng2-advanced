import { FlotComponent } from './charts/flot/flot.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard', pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'cards/:type',
    component: CardsComponent
  },
  {
    path: 'charts',
    children: [
      { path: '', redirectTo: 'flot', pathMatch: 'full'},
      { path: 'flot', component: FlotComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

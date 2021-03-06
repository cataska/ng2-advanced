import { Classic2Component } from './forms/classic2/classic2.component';
import { ClassicComponent } from './forms/classic/classic.component';
import { LoginGuard } from './login.guard';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { fallbackRoute } from './shared/fallback-route';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', component: LayoutComponent,
    children: [
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
        loadChildren: './charts/charts.module#ChartsModule',
        canActivate: [LoginGuard]
      },
      { path: 'forms/classic', component: ClassicComponent },
      { path: 'forms/classic2', component: Classic2Component }
    ]
  },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

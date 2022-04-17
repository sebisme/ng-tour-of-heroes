import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from '../heroes/heroes.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroFormComponent } from '../hero-form/hero-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'hero/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'heroes/add', component: HeroFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

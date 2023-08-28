import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'food',
    loadChildren: () => import('./page/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'training',
    loadChildren: () => import('./page/training/training.module').then( m => m.TrainingPageModule)
  },  {
    path: 'sign-up',
    loadChildren: () => import('./page/sessions/sign-up/sign-up.module').then( m => m.SignUpPageModule)
  },
  {
    path: 'sign-in',
    loadChildren: () => import('./page/sessions/sign-in/sign-in.module').then( m => m.SignInPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

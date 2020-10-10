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
    path: 'choose-character',
    loadChildren: () => import('./choose-character/choose-character.module').then( m => m.ChooseCharacterPageModule)
  },
  {
    path: 'choose-game',
    loadChildren: () => import('./choose-game/choose-game.module').then( m => m.ChooseGamePageModule)
  },  {
    path: 'sets-game',
    loadChildren: () => import('./sets-game/sets-game.module').then( m => m.SetsGamePageModule)
  },
  {
    path: 'hd-game',
    loadChildren: () => import('./hd-game/hd-game.module').then( m => m.HdGamePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

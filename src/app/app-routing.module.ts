import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/nursery-tab/nursery-tab.module').then(m => m.NurseryTabPageModule)},
  {
    path: 'notifications-show', loadChildren: () => import('./notifications/notifications-show/notifications-show.module').then( m => m.NotificationsShowPageModule)
  },
  {
    path: 'assistance-show',
    loadChildren: () => import('./assistance/assistance-show/assistance-show.module').then( m => m.AssistanceShowPageModule)
  },
  {
    path: 'signs',
    loadChildren: () => import('./nursery/signs/signs.module').then( m => m.SignsPageModule)
  },
  {
    path: 'summary-show',
    loadChildren: () => import('./summary/summary-show/summary-show.module').then( m => m.SummaryShowPageModule)
  },
  {
    path: 'notifications-add',
    loadChildren: () => import('./notifications/notifications-add/notifications-add.module').then( m => m.NotificationsAddPageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

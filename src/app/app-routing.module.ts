import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  TechnewsComponent
} from './technews/technews.component';
import {
  TopheadingComponent
} from './topheading/topheading.component';

import { SciencenewsComponent } from './sciencenews/sciencenews.component';



const routes: Routes = [{
    path: '',
    component: TopheadingComponent
  }, // home
  {
    path: 'tech',
    component: TechnewsComponent
  },

  {
    path: 'science',
    component: SciencenewsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

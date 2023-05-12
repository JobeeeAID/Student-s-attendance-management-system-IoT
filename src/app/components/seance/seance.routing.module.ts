import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeanceComponent } from './seance.component';

const routes: Routes = [
  {
    path: '',
    component: SeanceComponent,
    data: {
      title: 'Seances Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeanceRoutingModule {}

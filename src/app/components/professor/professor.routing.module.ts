import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorComponent } from './professor.component';

const routes: Routes = [
  {
    path: '',
    component: ProfessorComponent,
    data: {
      title: 'Professors Page',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfessorRoutingModule {}

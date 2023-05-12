import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DefaultLayoutComponent } from './components';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { AuthGuard } from '../services/authGuard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'students',
    pathMatch: 'full',
  },
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    canActivate: [AuthGuard],
    children: [
      {
        path: 'students',
        loadChildren: () =>
          import('./components/student/student.module').then(
            (m) => m.StudentModule
          ),
      },
      {
        path: 'professors',
        loadChildren: () =>
          import('./components/professor/professor.module').then(
            (m) => m.ProfessorModule
          ),
      },
      {
        path: 'seances',
        loadChildren: () =>
          import('./components/seance/seance.module').then(
            (m) => m.SeanceModule
          ),
      },
    ],
  },
  {
    path: 'logout',
    component: LogoutComponent,
    data: {
      title: 'Logout',
    },
  },
  {
    path: 'login',
    component: LoginComponent,
    data: {
      title: 'Login Page',
    },
  },
  { path: '**', redirectTo: 'students' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'top',
      anchorScrolling: 'enabled',
      initialNavigation: 'enabledBlocking',
      // relativeLinkResolution: 'legacy'
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}

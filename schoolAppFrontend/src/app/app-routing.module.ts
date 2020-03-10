import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginPage } from './pages/login/login.page';

const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  // },
  {
    path: 'members',
    canActivate: [AuthGuard],
    loadChildren: './members/member-routing.module#MemberRoutingModule'
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginPage },
  // {
  //   path: '',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  // {
  //   path: '',
  //   loadChildren: () =>
  //   import('../app/pages/home/home.module').then(m => m.HomePageModule)
  //   // import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'attendence',
    loadChildren: () => import('./pages/attendence/attendence.module').then( m => m.AttendencePageModule)
  },
  // {
  //   path: 'home',
  //   loadChildren: () =>
  //     import('./members/home/home.module').then(m => m.HomePageModule)
  // },
  {
    path: 'homework',
    loadChildren: () =>
      import('../app/pages/homework/homework.module').then(m => m.HomeworkPageModule)
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('../app/pages/timetable/timetable.module').then(m => m.TimetablePageModule)
  },
  {
    path: 'homework-details',
    loadChildren: () => import('./pages/homework-details/homework-details.module').then( m => m.HomeworkDetailsPageModule)
  },
  // {
  //   path: 'login',
  //   loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  // },
  {
    path: 'performance',
    loadChildren: () => import('./pages/performance/performance.module').then( m => m.PerformancePageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./members/dashboard/dashboard.module').then( m => m.DashboardPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}

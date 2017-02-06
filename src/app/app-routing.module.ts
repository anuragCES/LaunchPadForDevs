import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// My components
import { BoardListComponent } from './board/board-list/board-list.component';
import { BoardFormComponent } from './board/board-form/board-form.component';
import { TaskListComponent } from './task/task-list/task-list.component';
import { TaskComponent } from './task/task.component';

// routes
import { DashboardComponent } from './dashboard/dashboard.component';
import { BoardComponent } from './board/board.component';
import { PageNotFoundComponent } from './page-not-found.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard', },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'board', component: BoardComponent },
  { path: 'board/:id', component: BoardComponent },
  { path: '**', pathMatch: 'full', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routableComponents = [
    BoardFormComponent,
    BoardListComponent,
    TaskListComponent,
    TaskComponent,
    DashboardComponent,
    PageNotFoundComponent,
    BoardComponent
];

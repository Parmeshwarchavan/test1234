import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';
import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {
    path:'',
    component:AddUserComponentComponent
  },
  {
    component:AddUserComponentComponent,
    path:'add-user-component'
  },
  {
    path:'table-list-view-user-list',
    component:TableListViewUserListComponent
  },
  {
    path:'user-list',
    component:UserListComponent
  },
  {
    path:'edit-user-compnent/:id',
    component:EditUserCompnentComponent
  },
  {
    path:'**',
    component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

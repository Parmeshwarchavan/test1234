import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgpSortModule } from 'ngp-sort-pipe';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddUserComponentComponent } from './add-user-component/add-user-component.component';

import { EditUserCompnentComponent } from './edit-user-compnent/edit-user-compnent.component';
import { DeleteUserComponentComponent } from './delete-user-component/delete-user-component.component';

import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms'; 
import{HttpClientModule} from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { UserListComponent } from './user-list/user-list.component';
import{UsersDataService} from './services/users-data.service';
import { TableListViewUserListComponent } from './table-list-view-user-list/table-list-view-user-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SortnamePipe } from './sortname.pipe';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent,
    AddUserComponentComponent,
    EditUserCompnentComponent,
    DeleteUserComponentComponent,
    UserListComponent,
    TableListViewUserListComponent,
    PageNotFoundComponent,
    SortnamePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    NgpSortModule,
    NgbModule 
  ],
  providers: [UsersDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageCenteredContainerComponent } from './ui/components/page-centered-container/page-centered-container.component';
import { CardComponent } from './ui/components/card/card/card.component';
import { LoginFormComponent } from './forms/components/login-form/login.form.component';
import { LoginComponent } from './views/login/login/login.component';
import { PersonalDetailsComponent } from './views/personal-details/personal-details.component';
import { UserProjectsComponent } from './views/user-projects/user-projects.component';
import { UserComponent } from './views/user/user.component';
import { TableComponent } from './ui/components/table/table.component';
import { RouterModule } from '@angular/router';
import { AppRoutes } from './app-routes';



@NgModule({
  declarations: [
    AppComponent,
    PageCenteredContainerComponent,
    CardComponent,
    LoginFormComponent,
    LoginComponent,
    PersonalDetailsComponent,
    UserProjectsComponent,
    UserComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

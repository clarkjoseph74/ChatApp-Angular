import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './Components/home/home.component';
import { RegisterComponent } from './Components/register/register.component';
import { MemberListComponent } from './Components/members/member-list/member-list.component';
import { MemberDetailComponent } from './Components/members/member-detail/member-detail.component';
import { ListsComponent } from './Components/members/lists/lists.component';
import { MessagesComponent } from './Components/members/messages/messages.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './Modules/shared.module';
import { ErrorsTestComponent } from './Components/errors/errors-test/errors-test.component';
import { errorInterceptor } from './Interceptors/error.interceptor';
import { NotFoundComponent } from './Components/errors/not-found/not-found.component';
import { ServerErrorComponent } from './Components/errors/server-error/server-error.component';
import { MemberCardComponent } from './Components/member-card/member-card.component';
import { IconsModule } from './Modules/icons/icons.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    MemberListComponent,
    MemberDetailComponent,
    ListsComponent,
    MessagesComponent,
    ErrorsTestComponent,
    NotFoundComponent,
    ServerErrorComponent,
    MemberCardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SharedModule,
    IconsModule,
  ],
  providers: [provideHttpClient(withInterceptors([errorInterceptor]))],
  bootstrap: [AppComponent],
})
export class AppModule {}

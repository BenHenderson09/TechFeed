import { CKEditorModule } from 'ngx-ckeditor';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AdsenseModule } from 'ng2-adsense';

import { NgModule, APP_INITIALIZER } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';
import { AppRoutingModule } from './app-routing.module';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { AccountComponent } from './components/account/account.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { ViewaccountComponent } from './components/viewaccount/viewaccount.component';

import { ResolverService } from './services/resolver.service';
import { ViewpostResolverService } from './services/viewpost-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ContentComponent,
    AboutComponent,
    RegisterComponent,
    LoginComponent,
    AddpostComponent,
    ViewpostComponent,
    EditpostComponent,
    AccountComponent,
    EditaccountComponent,
    ViewaccountComponent
  ],
  imports:[
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    QuillModule,
    CKEditorModule,
    HttpModule,
    AdsenseModule.forRoot({
      adClient: 'ca-pub-5657057422841152',
      adSlot: 6827494002,
    })
  ],
  bootstrap: [AppComponent],
  providers: [
    ResolverService,
    ViewpostResolverService
  ],
})
export class AppModule { }

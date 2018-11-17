import { CKEditorModule } from 'ngx-ckeditor';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';  

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QuillModule } from 'ngx-quill';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { AppRoutingModule } from './/app-routing.module';
import { AboutComponent } from './components/about/about.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { AccountComponent } from './components/account/account.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { ViewaccountComponent } from './components/viewaccount/viewaccount.component';

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
    CKEditorModule
  ],
  providers: [],
})
export class AppModule { }

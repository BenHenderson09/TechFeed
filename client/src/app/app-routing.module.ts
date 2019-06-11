import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContentComponent } from '../app/components/content/content.component';
import { AboutComponent } from '../app/components/about/about.component';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { AddpostComponent } from './components/addpost/addpost.component';
import { ViewpostComponent } from './components/viewpost/viewpost.component';
import { EditpostComponent } from './components/editpost/editpost.component';
import { AccountComponent } from './components/account/account.component';
import { EditaccountComponent } from './components/editaccount/editaccount.component';
import { ViewaccountComponent } from './components/viewaccount/viewaccount.component';

import { ResolverService } from './services/resolver.service';
import { ViewpostResolverService } from './services/viewpost-resolver.service';

const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent }, 
  { path: 'posts/add', component: AddpostComponent }, 
  { path: 'posts/view/:id', component: ViewpostComponent, resolve: { post: ViewpostResolverService } },
  { path: 'posts/edit/:id', component: EditpostComponent},
  { path: 'account', component: AccountComponent},
  { path: 'account/edit', component: EditaccountComponent },
  { path: 'account/view/:username', component: ViewaccountComponent},
  { path: '**', component: ContentComponent, resolve: { posts: ResolverService}}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],

  providers: [ ResolverService, ViewpostResolverService ],

  declarations: []
})
export class AppRoutingModule {}

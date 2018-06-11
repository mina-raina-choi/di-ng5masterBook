import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {
  RouterModule,
  Routes,
  Router
} from '@angular/router';
import {
  APP_BASE_HREF,
  LocationStrategy,
  HashLocationStrategy
} from '@angular/common';

import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { SidebarItemComponent } from './sidebar/sidebar-item.component';

import { UserDemoModule } from './user-demo/user-demo.module';
import { AnalyticsDemoModule } from './analytics-demo/analytics-demo.module';

import { ExampleDef } from './example.model';
import { UserDemoInjectorComponent } from './user-demo/user-demo.injector.component';
import { UserDemoComponent } from './user-demo/user-demo.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo.component';


// 6장의 예시리스트들...
export const examples: ExampleDef[] = [
  {label: 'Intro', name: 'Root', path: '', component: IntroComponent},
  {label: 'Injector', name: 'Injector', path: 'injector', component: UserDemoInjectorComponent},
  {label: 'useClass (UserService)', name: 'UseClass', path: 'use-class', component: UserDemoComponent},
  {label: 'factory (AnalyticsService)', name: 'UseClass', path: 'factory', component: AnalyticsDemoComponent},
]

const routes: Routes = [
  { path: '', component: IntroComponent, pathMatch: 'full' },
  { path: 'injector', component: UserDemoInjectorComponent, pathMatch: 'full' },
  { path: 'use-class', component: UserDemoComponent, pathMatch: 'full' },
  { path: 'factory', component: AnalyticsDemoComponent, pathMatch: 'full' },
]


@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    SidebarComponent,
    SidebarItemComponent,
    UserDemoInjectorComponent,
    UserDemoComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),

    AnalyticsDemoModule,
    UserDemoModule
  ],
  providers: [
    { provide: APP_BASE_HREF,    useValue: '/' },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: 'ExampleDefs',    useValue: examples }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnalyticsDemoComponent } from './analytics-demo/analytics-demo/analytics-demo.component';


@NgModule({
  declarations: [
    AppComponent,
    AnalyticsDemoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

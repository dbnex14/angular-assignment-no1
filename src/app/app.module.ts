import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WarningComponent } from './warning/warning.component';
import { Warning2Component } from './warning2/warning2.component';
import { Warning3Component } from './warning3/warning3.component';

@NgModule({
  declarations: [
    AppComponent,
    WarningComponent,
    Warning2Component,
    Warning3Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

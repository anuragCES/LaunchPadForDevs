import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

// My components
import { AppComponent } from './app.component'
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
  ],
  declarations: [ AppComponent, PageNotFoundComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {

    constructor () {
        console.log('In constructor');
    }

 }


/*
Copyright 2016 JohnPapa.net, LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://bit.ly/l1cense
*/
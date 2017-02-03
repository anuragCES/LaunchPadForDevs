import { NgModule } from '@angular/core';
import { BrowserModule  } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// My components
import { AppComponent } from './app.component'
import { AppRoutingModule, routableComponents } from './app-routing.module';
import { PageNotFoundComponent } from './page-not-found.component';

// My services
import { BoardService } from './board/common/board.service'

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // Custom imports
    AppRoutingModule,
  ],
  declarations: [ AppComponent, PageNotFoundComponent, routableComponents ],
  providers: [BoardService],
  bootstrap: [ AppComponent ],
})
export class AppModule {}
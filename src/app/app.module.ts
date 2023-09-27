import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { PaginationComponent } from './shared/pagination/pagination.component';
import { MovieCardComponent } from './shared/movie-card/movie-card.component';
import { MovieDetailsComponent } from './views/movie-details/movie-details.component';

@NgModule({
  declarations: [
    AppComponent,

    // shared
    NavbarComponent,
    PaginationComponent,
    MovieCardComponent,
    
    // services
    MovieDetailsComponent,

    // views
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

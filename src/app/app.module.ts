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
import { MovieListComponent } from './shared/movie-list/movie-list.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

    // core
    NavbarComponent,

    // shared
    PaginationComponent,
    MovieCardComponent,
    MovieListComponent,
    
    // views
    MovieDetailsComponent,
    HomeComponent
  ],
  
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true
    })  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

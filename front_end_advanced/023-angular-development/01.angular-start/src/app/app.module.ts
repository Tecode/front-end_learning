import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './containers/local/local.component';
import { HomeComponent } from './containers/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProjectionComponent } from './components/content/projection/projection.component';

@NgModule({
  declarations: [AppComponent, LocalComponent, HomeComponent, ProjectionComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

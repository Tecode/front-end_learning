import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './containers/local/local.component';
import { HomeComponent } from './containers/home/home.component';
import { FormsModule } from '@angular/forms';
import { ProjectionComponent } from './components/content/projection/projection.component';
import { HoverDirective } from './directives/hover.directive';
import { PipeComponent } from './containers/pipe/pipe.component';
import { ModifyTextPipe } from './pipes/modify-text.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    HomeComponent,
    ProjectionComponent,
    HoverDirective,
    PipeComponent,
    ModifyTextPipe,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

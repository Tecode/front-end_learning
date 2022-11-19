import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LocalComponent } from './containers/local/local.component';
import { HomeComponent } from './containers/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProjectionComponent } from './components/content/projection/projection.component';
import { HoverDirective } from './directives/hover.directive';
import { PipeComponent } from './containers/pipe/pipe.component';
import { ModifyTextPipe } from './pipes/modify-text.pipe';
import { CommunicationComponent } from './containers/communication/communication.component';
import { ChildContentComponent } from './components/child-content/child-content.component';
import { DependencyInjectionModule } from './containers/dependency-injection/dependency-injection.module';
import { FormComponent } from './containers/form/form.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { RouterComponent } from './containers/router/router.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientComponentModule } from './containers/http-client/http-client.module';
import { AnimationComponent } from './containers/animation/animation.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    LocalComponent,
    HomeComponent,
    ProjectionComponent,
    HoverDirective,
    PipeComponent,
    ModifyTextPipe,
    CommunicationComponent,
    ChildContentComponent,
    FormComponent,
    NotFoundComponent,
    RouterComponent,
    AnimationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    DependencyInjectionModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientComponentModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

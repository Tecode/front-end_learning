import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimationComponent } from './containers/animation/animation.component';
import { CommunicationComponent } from './containers/communication/communication.component';
import { DependencyInjectionComponent } from './containers/dependency-injection/dependency-injection.component';
import { FormComponent } from './containers/form/form.component';
import { HomeComponent } from './containers/home/home.component';
import { HttpClientComponent } from './containers/http-client/http-client.component';
import { LocalComponent } from './containers/local/local.component';
import { NotFoundComponent } from './containers/not-found/not-found.component';
import { PipeComponent } from './containers/pipe/pipe.component';
import { RouterComponent } from './containers/router/router.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local', component: LocalComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
  { path: 'form', component: FormComponent },
  { path: 'router', component: RouterComponent },
  {
    path: 'router/:name',
    component: RouterComponent,
  },
  {
    path: '',
    loadChildren: () =>
      import('./containers/lazy-load/lazy-load.module').then((m) => {
        console.log(m);
        return m.LazyLoadModule;
      }),
  },
  { path: 'http-client', component: HttpClientComponent }, 
  { path: 'animation', component: AnimationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

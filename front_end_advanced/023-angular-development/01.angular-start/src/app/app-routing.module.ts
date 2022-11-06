import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunicationComponent } from './containers/communication/communication.component';
import { DependencyInjectionComponent } from './containers/dependency-injection/dependency-injection.component';
import { HomeComponent } from './containers/home/home.component';
import { LocalComponent } from './containers/local/local.component';
import { PipeComponent } from './containers/pipe/pipe.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'local', component: LocalComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'communication', component: CommunicationComponent },
  { path: 'dependency-injection', component: DependencyInjectionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LazyLoadComponent } from './lazy-load.component';

const routes: Routes = [{ path: 'lazy-load', component: LazyLoadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LazyLoadRoutingModule {}

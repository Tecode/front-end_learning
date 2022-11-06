import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DependencyInjectionComponent } from './dependency-injection.component';
import { CommonService } from 'src/app/service/common.service';



@NgModule({
  declarations: [DependencyInjectionComponent],
  // 模块级别
  providers: [CommonService],
  imports: [
    CommonModule
  ],
  exports: [DependencyInjectionComponent]
})
export class DependencyInjectionModule { }

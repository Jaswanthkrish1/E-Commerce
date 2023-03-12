import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Test1Component } from './test1/test1.component';
import { Test2Component } from './test2/test2.component';

import { TestServiceService } from '../service/test-service.service';



@NgModule({
  declarations: [
    Test1Component,
    Test2Component
  ],
  imports: [
    CommonModule,
    
  ],
  providers:[TestServiceService]
})
export class TestModuleModule { 
  
}

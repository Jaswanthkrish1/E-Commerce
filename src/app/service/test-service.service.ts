import { Injectable } from '@angular/core';
import { TestModuleModule } from '../test-module/test-module.module';

@Injectable({
  providedIn: TestModuleModule,
})
export class TestServiceService {

  constructor() { }
 j  (){
    return 'im jaswanth'
  }
}

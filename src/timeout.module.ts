import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";

import {TimeoutDirective} from "./timeout.directive";
import {TimeoutComponent} from "./timeout.component";
import {TimeoutService} from "./timeout.service";

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    TimeoutDirective,
    TimeoutComponent
  ],
  exports: [
    TimeoutDirective,
    TimeoutComponent
  ],
  providers: [
    TimeoutService
  ]
})
export class ShTimeoutModule {

}

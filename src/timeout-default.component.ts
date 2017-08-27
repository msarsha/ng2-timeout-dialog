import {Component} from "@angular/core";
@Component({
  selector: 'timeout-default',
  template: `
    <h2>Application Timeout</h2>
    <h1>{{secondsLeft}}</h1>
  `,
  styles: [`
    
  `]
})
export class TimeoutDefaultComponent{
  get secondsLeft(): number{
    return 5;
  }
}

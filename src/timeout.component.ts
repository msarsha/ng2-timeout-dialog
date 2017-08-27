import {Component} from '@angular/core';
import {TimeoutService} from './timeout.service';

@Component({
  selector: 'sh-timeout',
  template: `
    <div *ngIf="isVisible">
      <div class="timeout-overlay fullscreen" (click)="isVisible = false"></div>
      <div class="timeout-container" #ref>
        <ng-content>
        </ng-content>
      </div>
      <div *ngIf="ref.children.length == 0" class="timeout-default-box timeout-container">
        <timeout-default></timeout-default>
      </div>
    </div>
  `,
  styles: [`
    .timeout-default-box {
      text-align: center;
      height: 250px;
      width: 250px;
      background-color: antiquewhite;
      border-radius: 5px;
    }
    
    .fullscreen {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      left: 0;
    }

    .timeout-overlay {
      z-index: 100;
      background: rgba(0, 0, 0, .2);
    }

    .timeout-container {
      position: fixed;
      z-index: 101;
      left: 50%;
      top: 50%;
      transform: translateX(-50%) translateY(-50%);
    }
  `]
})
export class TimeoutComponent {
  isVisible = true;

  constructor(private timeoutService: TimeoutService) {
    this.timeoutService.timeoutObservable.subscribe((val: boolean) => this.isVisible = val);
  }
}

import {Directive, EventEmitter, HostListener, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {TimeoutService} from './timeout.service';

@Directive({
  selector: 'sh-timeout'
})
export class TimeoutDirective implements OnInit, OnDestroy {
  ngOnDestroy(): void {
    this.clearTimeout();
    this.setWarningState(false);
  }

  @Output() timeout = new EventEmitter();

  @Input() timeoutAfter: string;
  @Input() warningAfter: string;

  timeoutId: number;
  warningIsActive = false;

  constructor(private timeoutService: TimeoutService) {
  }

  ngOnInit(): void {
    if (!this.warningAfter) {
      this.warningAfter = this.timeoutAfter;
    }

    if (parseInt(this.warningAfter, 10) > parseInt(this.timeoutAfter, 10)) {
      throw new Error('warningAfter value can not be higher then timeoutAfter');
    }

    this.startTimeoutCounting(parseInt(this.warningAfter, 10));
  }

  @HostListener('window:mousedown')
  @HostListener('window:keydown')
  resetTimeout() {
    this.clearTimeout();
    this.setWarningState(false);
    this.startTimeoutCounting(parseInt(this.warningAfter, 10));
  }

  clearTimeout() {
    window.clearTimeout(this.timeoutId);
  }

  startTimeoutCounting(seconds: number) {
    this.timeoutId = window.setTimeout(this.handleTimeout(), seconds * 1000);
  }

  handleTimeout() {
    return () => {
      this.clearTimeout();

      if (parseInt(this.timeoutAfter, 10) === parseInt(this.warningAfter, 10) || this.warningIsActive) {
        this.setWarningState(false);
        this.timeout.emit();
      } else {
        this.setWarningState(true);
        this.startTimeoutCounting(parseInt(this.timeoutAfter, 10) - parseInt(this.warningAfter, 10));
      }
    };
  }

  setWarningState(val: boolean) {
    this.warningIsActive = val;
    this.timeoutService.setState(val);
  }
}

import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TimeoutService {
    $timeout = new BehaviorSubject(false);

    get timeoutObservable(): Observable<boolean> {
        return this.$timeout.asObservable();
    }

    setState(val: boolean) {
        this.$timeout.next(val);
    }
}

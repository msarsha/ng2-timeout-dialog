##ng2-timeout-dialog

Timeout dialog for your Angular applications.

__DEMO__ https://msarsha.github.io/ng2-timeout-dialog/

## How to use

- `npm install --save ng2-timeout-dialog`
- import `ShTimeoutModule` into your app module


markup:
````html
<sh-timeout [timeoutAfter]="10" [warningAfter]="2" (timeout)="onTimeout()">
  <h1>Custom warning dialog content</h1>
</sh-timeout>
````

component:
````typescript
  @Component({
      ...
  })
  export class MyComponent{
    onTimeout(){
      alert('timeout event fired!');
    }
  }
````

#### Properties:

`[timeoutAfter]` (seconds) - Number of seconds the `timeout` event will be fired after.

`[warningAfter]` (seconds) - Optional property to show a dialog before the `timeout` event is fired.

`(timeout)` - Will be fired after the time defined in `timeoutAfter`.

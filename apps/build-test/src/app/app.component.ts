import { Component } from '@angular/core';
import { firebase } from '@dereekb/test-build-firebase';

@Component({
  selector: 'build-test-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'build-test';

  test() {
    firebase(); // import to require it
  }
}

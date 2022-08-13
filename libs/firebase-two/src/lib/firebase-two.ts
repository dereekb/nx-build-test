import { firebase } from '@dereekb/test-build-firebase';
import { util } from '@dereekb/test-util';


export function firebaseTwo(): string {

  util();

  firebase();

  return 'firebase-two';
}

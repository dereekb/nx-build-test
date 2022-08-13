import { firebaseTwo } from '@dereekb/test-build-firebase-two';
import { firebase } from './firebase';

describe('firebase', () => {
  it('should work', () => {
    expect(firebase()).toEqual('firebase');

    // firebase-two is available only in spec tests
    firebaseTwo();
  });
});

import { firebaseChild } from './firebase-child';

describe('firebaseChild', () => {
  it('should work', () => {
    expect(firebaseChild()).toEqual('firebase-child');
  });
});

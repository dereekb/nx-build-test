import { firebaseChild } from "@dereekb/test-firebase-child";

export function firebase(): string {

  firebaseChild();

  return 'firebase';
}

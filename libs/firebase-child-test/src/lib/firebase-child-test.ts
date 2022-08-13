import { firebaseChild } from "@dereekb/test-firebase-child";
import { util } from "@dereekb/test-util";

export function firebaseChildTest(): string {

  util();

  firebaseChild();

  return 'firebase-child-test';
}

import { environment } from '../environments/environment';
import * as firebase from 'firebase';
import 'firebase/functions';

export class FirebaseModule {

  static init(): any {
    firebase.initializeApp(environment.firebaseConfig);
    return firebase;
  }
}

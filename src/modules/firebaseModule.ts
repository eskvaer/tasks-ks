import { environment } from '../environments/environment';

import * as firebase from 'firebase/app';
import 'firebase/functions';

class FirebaseModule {

    static init(): any {
      // Initialize Firebase
      firebase.initializeApp(environment.firebaseConfig);
      return firebase;
    }

}

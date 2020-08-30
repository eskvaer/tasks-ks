import { Injectable } from '@angular/core';
import { environment } from '../src/environments/environment';

import 'firebase/functions';
import * as firebase from 'firebase/app';

// Initialize Firebase
firebase.initializeApp(environment.firebaseConfig);

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  addNumbers(): any {
    const addNumbers = firebase.functions().httpsCallable('addNumbers');
    addNumbers({firstNumber: 1, secondNumber: 9}).then(result => {
      // Read result of the Cloud Function.
      const sanitizedMessage = result.data.text;
      console.log(result.data);
    }).catch(error => {
      // Getting the Error details.
      const code = error.code;
      const message = error.message;
      const details = error.details;
      console.log(code, message, details);
    });
  }
}

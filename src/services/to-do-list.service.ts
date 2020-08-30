import {Injectable} from '@angular/core';
import {FirebaseModule} from '../app/firebase-module';
import {Tasks} from "../app/to-do-list.model";

const firebase = FirebaseModule.init();

@Injectable({
  providedIn: 'root'
})
export class ToDoListService {

  getTasks(): any {
    const getTasks = firebase.functions().httpsCallable('getTasks');
    return getTasks();
  }

  getTask(taskId): any {
    const getTask = firebase.functions().httpsCallable('getTask');
    return getTask(taskId);
  }

  createTask(task): any {
    const createTask = firebase.functions().httpsCallable('createTask');
    return createTask(task);
  }

  updateTask(taskId, task: Tasks): any {
    const updateTask = firebase.functions().httpsCallable('updateTask');
    return updateTask({taskId, task});
  }
}

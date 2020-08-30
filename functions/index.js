const admin = require('firebase-admin');

const functions = require('firebase-functions');

admin.initializeApp();

exports.getTasks = functions.https.onCall(async () => {
  const db = admin.firestore();
  const tasksRef = db.collection('tasks');

  const snapshot = await tasksRef.get();
  const tasks = [];
  snapshot.forEach(doc => {
    tasks.push({id: doc.id, ...doc.data()});
  });
  return tasks;
});

exports.getTask = functions.https.onCall(async (taskId) => {
  const db = admin.firestore();
  const doc = await db.collection('tasks').doc(taskId).get();
  return {
    id: doc.id,
    ...doc.data(),
  }
});

exports.createTask = functions.https.onCall((task) => {
  const db = admin.firestore();
  return db.collection('tasks').add(task);
});

exports.updateTask = functions.https.onCall((props) => {
  const db = admin.firestore();
  return db.collection('tasks').doc(props.taskId).set(props.task);
});

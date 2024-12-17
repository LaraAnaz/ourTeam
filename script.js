function startLearning() {
    let topic = document.getElementById('learning-topic').value;
    alert("You selected: " + topic);
}
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
    apiKey: "API_KEY",
    authDomain: "YOUR_DOMAIN",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

function saveProgress(userId, progress) {
    set(ref(db, 'users/' + userId), {
        progress: progress
    });
}
import * as tf from '@tensorflow/tfjs';

const model = tf.sequential();
model.add(tf.layers.dense({units: 1, inputShape: [1]}));

const xs = tf.tensor2d([1, 2, 3, 4], [4, 1]);
const ys = tf.tensor2d([1, 3, 5, 7], [4, 1]);

model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

model.fit(xs, ys).then(() => {
    model.predict(tf.tensor2d([5], [1, 1])).print();
});
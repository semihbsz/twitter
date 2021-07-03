


const express = require('express')

const app = express()

const port = 3000


const admin = require('firebase-admin');

const serviceAccount = require('./ServiceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

const db = admin.firestore();

app.get('/posts', (request, response) => {
    response.set('Access-Control-Allow-Origin', '*')

    let posts = []
    db.collection('posts').get().then(snapshot => {
        snapshot.forEach((doc) => {
        posts.push(doc.data())
    });
    response.send(posts)
});
})
app.listen(process.env.PORT || 3000)
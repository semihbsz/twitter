const express = require('express')
const app = express()
const port = 3000

app.get('/posts', (request, response) => {
    
    let posts = [
        {
            id: 1,
            caption: 'twitter kullanmayı seviyorum !',
            subject: 'Yaşam'
        },
        {
            id: 2,
            caption: 'Beşiktaşın maçı ne olur ?',
            subject: 'Futbol'
        }
    ]
    response.send(posts)

})
app.listen(process.env.PORT || 3000)
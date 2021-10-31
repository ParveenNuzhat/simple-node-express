const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json())

app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
})

app.get('/', (req, res) => {
    res.send('I am a new learner of Node JS')
})

app.get('/about', (req, res) => {
    res.send('I am learning Node with nodemon')
})


const users = [
    {
        "id": 0,
        "name": "Leanne Graham",
        "username": "Bret",
        "email": "Sincere@april.biz"
    },
    {
        "id": 1,
        "name": "Nuzhat Parveen",
        "username": "nzhtprvn",
        "email": "nupa_canada@yahoo.com"
    },
    {
        "id": 2,
        "name": "Sama Mehjabin",
        "username": "Rinty",
        "email": "rrinty@gmail.com"
    },
    {
        "id": 3,
        "name": "Tasnuva Rashid",
        "username": "Shazi",
        "email": "tasnuva.rashid@gmail.com"
    },

]
app.get('/users', (req, res) => {
    console.log(req.query);
    res.send(users);
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})


const fruits = ['mango', 'lichi', 'guava', 'apple']

app.get('/fruits', (req, res) => {
    console.log(req.query);
    res.send(fruits)
})

const friends = ['rinty', 'tasnuva', 'prottoy']

app.get('/friends', (req, res) => {
    console.log(req.query);
    res.send(friends)
})

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    res.json(newUser)
})
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const TodoModel = require('./Models/todo');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/test', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/get', (req, res) => {
    TodoModel.find()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post('/add', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task })
        .then(result => res.json(result))
        .catch(err => res.json(err));
});

app.post('/delete', (req, res) => {
    const { id } = req.body;
    TodoModel.findByIdAndDelete(id)
        .then(result => res.json({ success: true }))
        .catch(err => res.json(err));
});

app.listen(3001, () => {
    console.log("Server is Running");
});

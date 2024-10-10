const express = require('express');
const path = require('path');
const { readUsersFromFile, writeUsersToFile } = require('./fs_func');

const app = express();
const port = 3000;
const filePath = path.join(__dirname, 'users.json');


app.use(express.json());

app.get('/users', (req, res) => {
    const users = readUsersFromFile(filePath);
    res.send({ users });
});


app.get('/users/:id', (req, res) => {
    const users = readUsersFromFile(filePath);
    const user = users.find(u => u.id === parseInt(req.params.id));

    if (!user) {
        return res.status(404).send({ error: 'User not found' });
    }

    res.send({ user });
});


app.post('/users', (req, res) => {
    const users = readUsersFromFile(filePath);
    const newId = users.length ? Math.max(...users.map(user => user.id)) + 1 : 1;
    users.push({
        id: newId,
        ...req.body
    });

    writeUsersToFile(filePath, users);
    res.status(200).send(req.body);
});


app.put('/users/:id', (req, res) => {
    const users = readUsersFromFile(filePath);
    const userIndex = users.findIndex(user => user.id === Number(req.params.id));

    if (userIndex === -1) {
        return res.status(404).send({ error: 'User not found' });
    }

    const updatedUser = { ...users[userIndex], ...req.body, id: users[userIndex].id };
    users[userIndex] = updatedUser;
    writeUsersToFile(filePath, users);
    res.send(updatedUser);
});


app.delete('/users/:id', (req, res) => {
    let users = readUsersFromFile(filePath);
    const userIndex = users.findIndex(u => u.id === parseInt(req.params.id));

    if (userIndex === -1) {
        return res.status(404).json({ error: 'User not found' });
    }

    users = users.filter(u => u.id !== parseInt(req.params.id));

    writeUsersToFile(filePath, users);
    res.json({ message: 'User deleted successfully' });
});


app.use((req, res) => {
    res.status(404).send({ message: "URL not found" });
});

app.listen(port, () => {
    console.log(`Сервер запущен на http://localhost:${port}`);
    console.log('Для остановки сервера нажмите Q');
});

//выход
process.stdin.setRawMode(true);
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (key) => {
    if (key === 'q' || key === 'Q') {
        process.exit(0);
    }
});
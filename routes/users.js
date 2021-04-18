const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    const user = new User(req.body);

    try {
        const userSaved = await user.save();
        res.json(userSaved);
    } catch (err) {
        res.status(400).send(err);
    }
})

router.get('/', async (req, res) => {
    try{
        const users = await User.find();
        res.json(users);
    } catch(err) {
        res.status(400).send(err);
    }
})

router.delete('/:id', async (req, res) => {
    try{
        const userToRemove = await User.findById(req.params.id);
        await userToRemove.remove();
        res.json(userToRemove);
    } catch(err) {
        res.status(400).send(err);
    }
})

module.exports = router;
const Aposts = require('express').Router()



Aposts.get('/:id',(req, res) =>
{
    let pid = req.params.id;

    console.log(pid)
    res.send('zurna kurna ')




})







module.exports = Aposts
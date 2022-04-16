const { response } = require('express');

const getUsers = (req, res = response) => {

    const { q, nombre, apikey } = req.query;

    res.json({
        msg: 'get API - controller',
        q, nombre, apikey
    });
}

const postUsers = (req, res = response) => {
    const { name, age } = req.body;

    res.json({
        msg: 'post API - controller',
        name, age
    });
}

const putUsers = (req, res = response) => {
    const { id } = req.params;

    res.json({
        msg: 'put API - controller',
        id
    });
}

const deleteUsers = (req, res = response) => {
    res.json({
        msg: 'delete API - controller'
    });
}

module.exports = {
    getUsers,
    postUsers,
    putUsers,
    deleteUsers
}
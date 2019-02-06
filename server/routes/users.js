var express = require('express');
var router = express.Router();

const { createHash } = require('../utils');

const User = require("../models/User");

router.post("/login", async (req, res) => {
    console.log("req.body login", req.body);
    //Переданные параметры запроса хранятся в req.body

    // Для поиска пользователя необходимо вызвать
    // const user = await User.findOne({login: req.body.login});

    //Ответ клиету отдаётся в 2-ух форматах
    // 1. res.json({status: "ok", user});
    // 2. res.json({status: "error", error: "Неверный пароль"});
    
    //Метод createHash создаёт хэш для безопасного хранения пароля в бд
});

router.post("/", async (req, res) => {
    console.log('req.body registration', req.body , req.cookies);
    //Переданные параметры запроса хранятся в req.body

    // Для создания пользователя необходимо вызвать
    // const user = new User({login: req.body.login});
    // Затем сохранить его в бд с помощью user.save();

    //Ответ клиету отдаётся в 2-ух форматах
    // 1. res.json({status: "ok", user});
    // 2. res.json({status: "error", error: "Неверный пароль"});

    //Метод createHash создаёт хэш для безопасного хранения пароля в бд
});

module.exports = router;


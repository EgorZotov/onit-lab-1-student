var mongoose = require("mongoose"),
    Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

var UserSchema = mongoose.Schema({
    login: String,
    password: String,
    first_name: String,
    last_name: String
});

// https://www.npmjs.com/package/jsonwebtoken документация + примеры по библиотеке jwt

UserSchema.statics.checkAuth = () => (req, res, next) => {
    // получение токена из присланных кук, req.cookies[AUTH_COOKIE_NAME]
    // проверка токена jwt.verify (возвращает объект, который положили в getJwtToken)
    // если токен проешел проверку то
    // 1)в объект req положить объект с id пользователя req.user = {}
    // 2)вызываем функцию next()
    // иначе возвращаем 401 ошибку
};

UserSchema.methods.getJwtToken = function () {
    const {_id, login} = this;

    // сгененрировать токен, используя функцию jwt.sign,
    // секрет лежит здесь process.env.JWT_TOKEN_SECRET
};

var User = mongoose.model("User", UserSchema);
module.exports = User;

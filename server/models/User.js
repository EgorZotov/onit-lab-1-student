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


UserSchema.methods.editSelf = async function (fields) {
    // Необходимо отредактировать только поля, включённые в массив editable_fields
    // Для этого можно использовать конструкцию for..in для итерирования объекта editable_fields
    // И метод Array.includes(value) для проверки наличия знаения в массиве
    const editable_fields = ['first_name', 'last_name'];
    // Текущий документ пользователя доступен в контексте this
    // чтобы забисать ему новое значение поля нужно сделать так: this.first_name = "Иван";
    // Затем нужно вызвать метод this.save(), чтобы сохранить данные в БД
    return this;
};

var User = mongoose.model("User", UserSchema);
module.exports = User;

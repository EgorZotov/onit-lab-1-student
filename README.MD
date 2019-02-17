# ОНИТ: Лабораторная работа 2

## Что потребуется
1) Выполненная первая лабораторная работа
2) [Схемы аутентификации](https://habr.com/ru/company/dataart/blog/262817/)
3) [Формат токена Json Web Tokens](https://ru.wikipedia.org/wiki/JSON_Web_Token)

## Цели
* Познакомиться с современными подходами аутентификации пользователей в WEB (и не только) приложениях
* Реализовать схему аутентификации по токенам на React + NodeJs стеке

## Ход выполнения

### Client Side
1) Добавить роутер по умолчанию в `App.js`
```jsx harmony
<Route exact path="/" render={() => <Redirect to="/me"/>}/>
```
2) На странице с профилем пользователя добавить вызов метода получения профиля при загрузке страницы
```jsx harmony
    componentDidMount() {
        this.fetchUserProfile();
    }

    fetchUserProfile = async () => {
        const {setUser, history} = this.props;
        // вызова метода GET /users/me
        // в случае успешной обработки вызвать setUser
        // в случае получения Http status 401 перенаправить  пользователя на login
        // использовать await + try/catch или .then((response, err) => {})
    };
```
3) Для получения свойства `history` добавить в экспорт компонента `withRouter`
```jsx harmony
import {withRouter} from "react-router-dom";
/*Класс компонента*/
export default withRouter(Me);
```


### Server Side
1) Объявить константу с именем куки для передачи токена в `utils/const.js`
```javascript
const AUTH_COOKIE_NAME = "X-AUTH_COOKIE";

module.exports = {
    AUTH_COOKIE_NAME,
};

// для импорта использовать const {AUTH_COOKIE_NAME} = require("../utils/const");
```
2) В `models/User.js` добавить и реализовать следующие функции
```javascript
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
```
3) В методы `POST /api/users`(регистрация) и `POST /api/users/login` добавить проставление куки с токеном,
 используя 
 ```javascript
 res.cookie(AUTH_COOKIE_NAME, user.getJwtToken(), {  maxAge: /*время жизни куки в MS*/, httpOnly: true}); 
 ```


4) Добавить реализация метода `GET /api/users/me`
```javascript
router.use("/me", User.checkAuth()); //добавление middleware, для проверки токена при каждом запросе
router.get("/me", async (req, res) => { //метод возвраащает профиль пользователя
    console.log("req.user me", req.user);

    const userId = req.user._id;
    if (!userId) {
        res.json({status: "error", error: "Индетификатор пользователя не найден"});
        return;
    }

    try {
        const user = await User.findOne({_id: userId});
        res.json({status: "ok", user});
    } catch (err) {
        console.error(err)
    }
});
```
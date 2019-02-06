import React, { Component , Fragment} from 'react';
import { Redirect, Link, NavLink, withRouter} from "react-router-dom";
// import './main.scss';
import Input from "../../components/Input";
import api from "../../requester";
import validateResponse from "../../utils/validateResponse";

class Login extends Component {
    state = {
        login: "",
        password: ""
    };
    handleFieldChange = ({name,value}) => this.setState({[name] : value});
    login = async (e) => {
        e.preventDefault();
        const {setUser, history} = this.props;
        //Запросы к серверу делаются таким образом
        //const response = await api.post('/users/login', {login: login, password: password});

        //Функция setUser установит пользователя полученного в состояние App

        // Редирект выполяется вызовом history.push("/me");

        //Функция validateResponse проверит ответ и выдаст alert в случае ошибки
    };
    render() {
        return (
            <div className="login-page">
                <form onSubmit={this.login}>
                    <h1>Логин</h1>
                    <Input
                        onChange={this.handleFieldChange}
                        name = "login"
                        placeholder="Логин"
                        value={this.state.login}
                    />
                    <Input
                        onChange={this.handleFieldChange}
                        name = "password"
                        placeholder="Пароль"
                        type = "password"
                        value={this.state.password}
                    />
                    <button>Войти</button>
                </form>
            </div>
        )
    }
}


export default withRouter(Login);

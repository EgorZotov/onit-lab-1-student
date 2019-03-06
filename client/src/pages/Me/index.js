import React, { Component , Fragment} from 'react';

class Me extends Component {
    state = {
        login: this.props.login,
        first_name: this.props.first_name,
        last_name: this.props.last_name,
    }
    handleFieldChange = ({ name, value }) => this.setState({ [name]: value });
    editUser = async (e) => {
       e.preventDefault();
       const { setUser } = this.props;
       // Отправить запрос на редактирование полей
       // const response = await api.post('/users/me', this.state);
   }

    render(){
        const {user = {}} = this.props;
        return (
            <div className="me">
                <div className="me__profile">
                    <form onSubmit={this.editUser}>
                        <h1>Профиль</h1>
                        <Input
                            onChange={this.handleFieldChange}
                            name="first_name"
                            placeholder="Имя"
                            value={this.state.first_name}
                        />
                        <Input
                            onChange={this.handleFieldChange}
                            name="last_name"
                            placeholder="Фамилия"
                            value={this.state.last_name}
                        />
                        <Input
                            onChange={this.handleFieldChange}
                            name="login"
                            placeholder="Логин"
                            value={this.state.login}
                        />
                        <button>Сохранить</button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Me

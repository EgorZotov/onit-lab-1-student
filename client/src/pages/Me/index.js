import React, { Component , Fragment} from 'react';

class Me extends Component {
    render(){
        const {user = {}} = this.props;
        return (
            <div className="me">
                <div className="me__profile">
                    <p>Ваше имя: {user.first_name} {user.last_name}</p>
                    <p>Ваш логин: {user.login}</p>
                </div>
            </div>
        )
    }
}

export default Me
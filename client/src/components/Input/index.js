import React, { Component } from 'react';
import './main.scss';

class Input extends Component {
    render() {
        const {onChange,name,...rest} = this.props;
        return (
            <div className="input">
                <input
                    {...rest}
                    name={name}
                    onChange = {(event) => {onChange({name, value: event.target.value})}}
                />
            </div>
        )
    }
}


export default Input;

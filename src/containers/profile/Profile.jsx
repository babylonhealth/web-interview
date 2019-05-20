import React, { Component } from 'react';

import Logo from '../../components/logo/Logo';
import './styles.scss'

class Profile extends Component {
    render () {
        if (!this.props.user.length) return null;

        const avatar = this.props.user[0].avatar;
        const name = `${this.props.user[0].firstName} ${this.props.user[0].lastName}`;
        return (
            <div className="profile">
                <Logo logo={avatar} alt="Avatar" />
                <div>{name}</div>
            </div>
        )
    }
}

export default Profile;
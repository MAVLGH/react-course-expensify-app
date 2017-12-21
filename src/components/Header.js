import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p><NavLink to="/" activeClassName="is-active" exact={true}>DashBoard</NavLink></p>
        <p><NavLink to="/create" activeClassName="is-active">Create Expense</NavLink></p>
        <p><NavLink to="/help" activeClassName="is-active">Help</NavLink></p>        
    </header>
);

export default Header;
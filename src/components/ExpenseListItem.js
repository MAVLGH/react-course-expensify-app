import React from 'react';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

const ExpenseListItem = ({ description, amount, createdAt, id }) => (
    <div>
        <h3><NavLink to={`/edit/${id}`} activeClassName="is-active" exact={true}>{description}</NavLink></h3>
        <p>Amount: {`USD$${(amount / 100)} `}-{` Date: ${moment(createdAt).format('DD/MM/YYYY HH:mm:ss').toString()}`}</p>
    </div>
);

export default ExpenseListItem;


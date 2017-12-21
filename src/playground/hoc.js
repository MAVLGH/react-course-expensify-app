// Higher order component (HOC), a component (HOC) that renders another component (Regular one)
// Reuse code
// Render hijacking
// prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

// requireAuthentication
const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/>: <p>require authentication!</p>}
        </div>
        
    )
}

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(AdminInfo);

ReactDOM.render(<AuthInfo isAdmin={true} isAuthenticated={true} info="There are the details"/>, 
document.getElementById('app'));
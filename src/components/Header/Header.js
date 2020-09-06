import React from 'react';

const Header = () => {
    const headerStyle  ={
        background:'#ecf0f1',
        width: '80%,',
        margin: 'auto',
        padding: '20px',
        textAlign:'center',
    }
    return (
        <div style={headerStyle}>
            <h1>All posts are below</h1>
        </div>
    );
};

export default Header;
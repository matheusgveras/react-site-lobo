import React from 'react';
import '../../css/App.css';
import MediaQuery from 'react-responsive'

function Layout({ children }) {
    return (
        <div>
            <MediaQuery minDeviceWidth={656} device={{ deviceWidth: 1600 }}>
            {children}
                {/* <aside className="o-aside">Aside {children}</aside>
                <main className="o-main">Main {children} </main>
                <footer className="o-footer">Footer {children}</footer> */}
            </MediaQuery>
            <MediaQuery maxDeviceWidth={655}>
            {children}
                {/* <header className="o-header">Header {children}</header>
                <main className="o-main">Main {children}</main>
                <footer className="o-footer">Footer {children}</footer> */}
            </MediaQuery>
        </div>
    );
}

export default Layout;

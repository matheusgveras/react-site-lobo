import React from 'react';
import '../../css/App.css';
import MediaQuery from 'react-responsive'

function Layout({ children }) {
    return (
        <div className="App">
            <MediaQuery minDeviceWidth={656} device={{ deviceWidth: 1600 }}>
                <aside className="o-aside">Aside</aside>
                <main className="o-main">Main</main>
                <footer className="o-footer">Footer</footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={655}>
                <header className="o-header">Header</header>
                <main className="o-main">Main</main>
                <footer className="o-footer">Footer</footer>
            </MediaQuery>
        </div>
    );
}

export default Layout;

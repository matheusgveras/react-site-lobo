import React from 'react';
import '../../css/App.css';
import MediaQuery from 'react-responsive';
import logo from '../../resources/logo.png';
import menuIcon from '../../resources/menu.png';

function Layout({ children }) {
    return (
        <div>
            <MediaQuery minDeviceWidth={656} device={{ deviceWidth: 1600 }}>
                <header className="o-header">
                    <div className="logo">
                        <img width="130" src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="#/projetos">Projetos</a></li>
                            <li><a href="#/sobre">Sobre</a></li>
                            <li><a href="#/contato">Contato</a></li>
                        </ul>
                    </div>
                </header>
                <main className="o-main">Main {children} </main>
                <footer className="o-footer">
                    <div class="sociallinks">
                        <ul>
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Github</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                    <div class="copyright">
                        Todos os direitos reservados
                    </div>
                </footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={655}>
                <header className="o-header">
                    <div className="logo">
                        <img width="100" src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                      <img width="30" src={menuIcon} alt="menu" />
                    </div>
                </header>
                <main className="o-main">{children}</main>
                <footer className="o-footer">
                    <div class="sociallinks">
                        <ul>
                            <li>Linkedin</li>
                            <li>Instagram</li>
                            <li>Facebook</li>
                            <li>Github</li>
                            <li>Pinterest</li>
                        </ul>
                    </div>
                    <div class="copyright">
                        Todos os direitos reservados
                    </div>
                </footer>
            </MediaQuery>
        </div>
    );
}

export default Layout;

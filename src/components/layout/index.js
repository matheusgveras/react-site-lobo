import React from 'react';
import { Link } from "react-router-dom";

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
                        <img width="140" src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                        <ul>
                            <li> <Link to="/projects">Projetos</Link></li>
                            <li> <Link to="/about">Sobre</Link></li>
                            <li> <Link to="/contact">Contato</Link></li>
                        </ul>
                    </div>
                </header>
                <main className="o-main" style={{height: window.innerHeight - 150}}>{children}</main>
                <footer className="o-footer">
                    <div class="sociallinks">
                        <ul>
                            <li><a href="#/">Linkedin</a></li>
                            <li><a href="#/">Instagram</a></li>
                            <li><a href="#/">Facebook</a></li>
                            <li><a href="#/">Github</a></li>
                            <li><a href="#/">Pinterest</a></li>
                        </ul>
                    </div>
                    <div class="copyright">
                        Todos os direitos reservados
                    </div>
                </footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={600}>
                <header className="o-header">
                    <div className="logo">
                        <img width="130" src={logo} alt="logo" />
                    </div>
                    <div className="menu">
                      <img width="30" src={menuIcon} alt="menu" />
                    </div>
                </header>
                <main className="o-main" style={{height: window.innerHeight - 190}}>{children}</main>
                <footer className="o-footer">
                    <div class="copyright">
                       Lobo Frontal, por Matheus Veras
                    </div>
                </footer>
            </MediaQuery>
        </div>
    );
}

export default Layout;

import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Modal from 'react-responsive-modal';
import MediaQuery from 'react-responsive';
//structures
import SocialLinks from './sociallinks';
import Menu from './menu';
//images
import logo from '../../resources/logo.png';
import menuIcon from '../../resources/menu.png';
//css
import '../../css/App.css';

function Layout({ children }) {
    const [open, setModal] = useState(false);
    return (
        <div>
            <MediaQuery minDeviceWidth={656} device={{ deviceWidth: 1600 }}>
                <header className="o-header">
                    <div className="logo">
                        <Link to="/"><img width="140" src={logo} alt="logo" /></Link>
                    </div>
                    <div className="menu">
                        <Menu />
                    </div>
                </header>
                <main className="o-main" style={{ height: window.innerHeight - 150 }}>{children}</main>
                <footer className="o-footer">
                    <div class="sociallinks">
                        <SocialLinks />
                    </div>
                    <div class="copyright">
                        Lobo Frontal, por Matheus Veras
                    </div>
                </footer>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={600}>
                <header className="o-header">
                    <div className="logo">
                        <Link to="/"><img width="130" src={logo} alt="logo" /></Link>
                    </div>
                    <div className="menu">
                        <img onClick={() => setModal(true)} width="30" src={menuIcon} alt="menu" />
                        <Modal open={open} onClose={() => setModal(false)} center classNames={{
                            modal: 'customModal',
                        }}>
                            <h2>Menu</h2>
                            <Menu />
                            <h2>Outros links</h2>
                            <SocialLinks />
                        </Modal>
                    </div>
                </header>
                <main className="o-main" style={{ height: window.innerHeight - 190 }}>{children}</main>
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

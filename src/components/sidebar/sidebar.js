import * as React from "react";
import { Link } from "gatsby";
import Logo from "../logo/logo"
import resume from "../../../yangrchen_fa2020_resume_02.pdf";
import { slide as Menu } from 'react-burger-menu';

var styles = {
  bmBurgerButton: {
    position: 'fixed',
    width: '36px',
    height: '30px',
    left: '36px',
    top: '36px'
  },
  bmBurgerBars: {
    background: '#373a47'
  },
  bmBurgerBarsHover: {
    background: '#000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    top: 0,
    height: '100%'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    textAlign: 'center',
    padding: '1em'
  },
  bmItem: {
    display: 'block',
    padding: '0.5em'
  },
  bmOverlay: {
    top: 0,
    background: 'rgba(0, 0, 0, 0.3)'
  }
}

const Sidebar = () => {
    // Can later replace with 'children' later to generalize
    return (
      <div>
            <Menu styles={styles} burgerButtonClassName="lg:hidden">
                <a id="home" href="/">Home</a>
        <a id="about" href="/about">About</a>
        <a id="contact" href="/contact">Contact</a>
            </Menu>
        <main className="mt-16 lg:h-screen pt-serif lg:block w-64">
            <Link to={`/`}><Logo style={{maxHeight: '15vh', textAlign: 'center'}} /></Link>
            <div className="ml-20 mt-10 hidden lg:block">
                <nav>
                    <ul>
                        <li className="hover:underline">
                            <a href={resume}>Resume</a>
                        </li>
                        <li className="hover:underline">
                            <Link to={`/`}><span>Projects</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Art</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Writing</span></Link>
                        </li>
                    </ul>
                </nav>
                <nav className="lg:mt-6 text-sm">
                    <ul className="lg:space-y-2">
                        <li className="hover:underline">
                            <Link to={'/'}><span>About</span></Link>
                        </li>
                        <li className="hover:underline">
                            <Link to={'/'}><span>Contact</span></Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </main>
</div>
    )
};

export default Sidebar;
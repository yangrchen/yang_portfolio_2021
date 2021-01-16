import * as React from "react";
import { Link } from "gatsby";

const Sidebar = () => {
    // Can later replace with 'children' later to generalize
    return (
        <main className="pt-6 px-10 lg:h-screen w-1/6 merriweather">
            <div>Insert logo here.</div>
            <div>
                <nav>
                    <ul>
                        <li className="hover:underline">
                            <Link to={`/about`}><span>Resume</span></Link>
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
                <nav className="pt-6 text-sm">
                    <ul>
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
    )
};

export default Sidebar;
import * as React from "react";
import { Link } from "gatsby";

const Sidebar = () => {
    // Can later replace with 'children' later to generalize
    return (
        <main className="pt-6 px-10 md:h-screen w-1/6">
            <div>Insert logo here.</div>
            <div>
                <nav className="">
                    <ul>
                        <li>
                            <Link to={`/about`}><span>Resume</span></Link>
                        </li>
                        <li>
                            <Link to={`/`}><span>Projects</span></Link>
                        </li>
                        <li>Art</li>
                        <li>Writing</li>
                    </ul>
                </nav>
                <nav className="">
                    <ul>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                </nav>
            </div>
        </main>
    )
};

export default Sidebar;
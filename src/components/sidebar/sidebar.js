import * as React from "react";
import { Link } from "gatsby";

const Sidebar = () => {
    // Can later replace with 'children' later to generalize
    return (
        <main>
            <div>Insert logo here.</div>
            <div>
                <nav class="">
                    <ul>
                        <li>
                            <Link to={`/about`}><span>Resume</span></Link>
                        </li>
                        <li>Projects</li>
                        <li>Art</li>
                        <li>Writing</li>
                    </ul>
                </nav>
                <nav class="">
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
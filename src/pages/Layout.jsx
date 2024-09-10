import {Outlet, Link} from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to ="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/survival">Survival</Link>
                    </li>
                    <li>
                        <Link to ="/infinity">Infinity</Link>
                    </li>
                    <li>
                        <Link to ="/leaderboard">Leaderboard</Link>
                    </li>
                    <li>
                        <Link to ="/login">Login</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </>
    )
};

export default Layout;
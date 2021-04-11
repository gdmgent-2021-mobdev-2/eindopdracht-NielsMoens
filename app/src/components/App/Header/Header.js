import { Link } from 'react-router-dom';
import { Routes } from '../../../core/routing/routing';
import UserLogin from "./login/UserLogin";

const navItems = [{
    'label': 'Home',
    'route': Routes.Home,
    'icon': null,
}, {
    'label': 'Services',
    'route': Routes.Services,
    'icon': null,
}, {
    'label': 'Projects',
    'route': Routes.Projects,
    'icon': null,
}, {
    'label': 'Clients',
    'route': Routes.Clients,
    'icon': null,
}, {
    'label': 'Reviews',
    'route': Routes.Reviews,
    'icon': null,
}
]

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="#">3DPrinting Dev</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    {
                        navItems.map((navItems) => (
                            <li key={navItems.label} className="nav-item">
                                <Link className="nav-link" to={navItems.route}>{navItems.label}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
           <UserLogin />
        </nav>
    );
};

export default Header;
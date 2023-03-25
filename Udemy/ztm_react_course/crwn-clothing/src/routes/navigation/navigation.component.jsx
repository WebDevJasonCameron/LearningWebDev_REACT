// Libs
import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";

// Comps
import { ReactComponent as CrwnLogo} from "../../assets/crown.svg"

// Styles
import './navigation.styles.scss'

// Comp
const Navigation = () => {
	return (
		<Fragment>
			<div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/auth">
            SIGN IN
          </Link>
        </div>
			</div>
			<Outlet />
		</Fragment>
	);
};

export default Navigation
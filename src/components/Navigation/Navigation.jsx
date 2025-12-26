import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Container from "../Container/Container";
import { buildLinkClass } from "../../helpers/buildLinkClass";

const Header = () => {
  return (
    <header className={css.containerHeader}>
      <Container>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink
                to="/"
                className={(props) => buildLinkClass({ ...props, css })}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={(props) => buildLinkClass({ ...props, css })}
              >
                Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;

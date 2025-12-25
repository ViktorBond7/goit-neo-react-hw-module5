import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import Container from "../Container/Container";
import clsx from "clsx";

const Header = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.activ);

  return (
    <header className={css.containerHeader}>
      <Container>
        <nav>
          <ul className={css.list}>
            <li>
              <NavLink to="/" className={buildLinkClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/movies" className={buildLinkClass}>
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

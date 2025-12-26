import { NavLink, useParams } from "react-router-dom";
import Container from "../Container/Container";
import css from "./AdditionalInf.module.css";
import clsx from "clsx";

const AdditionalInf = () => {
  const buildLinkClass = ({ isActive }) =>
    clsx(css.link, isActive && css.activ);
  const { movieId } = useParams();

  return (
    <div className={css.container}>
      <Container>
        <p className={css.page}>Additional Information</p>
        <ul className={css.list}>
          <li>
            <NavLink
              className={buildLinkClass}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={buildLinkClass}
              to={`/movies/${movieId}/reviews`}
            >
              Rewies
            </NavLink>
          </li>
        </ul>
      </Container>
    </div>
  );
};

export default AdditionalInf;

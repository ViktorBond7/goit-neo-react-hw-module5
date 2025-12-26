import { NavLink, useParams } from "react-router-dom";
import Container from "../Container/Container";
import css from "./AdditionalInf.module.css";
import { buildLinkClass } from "../../helpers/buildLinkClass";

const AdditionalInf = () => {
  const { movieId } = useParams();

  return (
    <div className={css.container}>
      <Container>
        <p className={css.page}>Additional Information</p>
        <ul className={css.list}>
          <li>
            <NavLink
              className={(props) => buildLinkClass({ ...props, css })}
              to={`/movies/${movieId}/cast`}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              className={(props) => buildLinkClass({ ...props, css })}
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

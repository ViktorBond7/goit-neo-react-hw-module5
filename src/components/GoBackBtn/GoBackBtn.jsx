import { Link } from "react-router-dom";
import css from './GoBackBtn.module.css'

const GoBackBtn = ({path}) => {
  return <Link className={css.btn} to={path}>Go Back</Link>;
};

export default GoBackBtn;
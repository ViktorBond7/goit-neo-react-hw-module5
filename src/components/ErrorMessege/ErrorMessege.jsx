import css from "./ErrorMessege.module.css";
const ErrorMessege = () => {
  return (
    <div>
      <p className={css.pageErr}>
        Oops, there was an error, please try reloading!!!
      </p>
    </div>
  );
};

export default ErrorMessege;

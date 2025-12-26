import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchForm.module.css";

const SearchForm = ({ handleSearch }) => {
  const onSubmit = (values, { resetForm }) => {
    if (!values.searchMovie.trim()) {
      alert("empty");
      return;
    }
    handleSearch(values.searchMovie);
    resetForm();
  };
  return (
    <>
      <Formik initialValues={{ searchMovie: "" }} onSubmit={onSubmit}>
        <Form className={css.form}>
          <Field className={css.field} type="text" name="searchMovie" />
          <ErrorMessage name="searchMovie" component="div" />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;

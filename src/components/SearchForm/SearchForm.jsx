import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./SearchForm.module.css";
import toast from "react-hot-toast";

const SearchForm = ({ handleSearch }) => {
  const onSubmit = (values, { resetForm }) => {
    if (!values.searchMovie.trim()) {
      toast.error("Enter a word to search.");
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
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </>
  );
};

export default SearchForm;

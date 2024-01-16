import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/authContexts";

const useForm = (callback, validateform, submitHandler) => {
  const [values, setFormValues] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [err, setErr] = useState({})
  const [isCorrect, setCorect] = useState(false)

  const { registerSubmitHandler, loginSubmitHandler } = useContext(AuthContext)

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...values, [name]: value })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitHandler) {
      loginSubmitHandler(values)
      setErr(validateform(values))
      setCorect(true);
    }
  };

  useEffect(() => {
    if (Object.keys(err).length === 0 && isCorrect) {
      callback()
      registerSubmitHandler(values)
    }
  }, [err])

  return {
    values,
    err,
    onChange,
    handleSubmit,
  };
}

export default useForm;

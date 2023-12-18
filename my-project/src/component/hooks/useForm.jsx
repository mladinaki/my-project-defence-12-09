import { useEffect, useState } from "react";

export default function useForm(submitHandler, initialValues) {
  const [values, setFormValues] = useState(initialValues);

  const onChange = (e) => {
    setFormValues((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

 useEffect(() => {
  setFormValues(initialValues);
 },[initialValues])

  const onSubmit = (e) => {
    e.preventDefault();

    if (submitHandler) {
      submitHandler(values);
    }
  };

  return {
    values,
    onChange,
    onSubmit,
  };
}

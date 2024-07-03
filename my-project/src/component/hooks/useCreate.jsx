import { useEffect, useState } from "react"

const useCreate = (callback, validate, submit) => {
    const [values, setValues] = useState({
        sneacersName: '',
        price: '',
        availablity: '',
        model: '',
        manifacture: '',
        imageUrl: '',
        description: '',
    })

    const [err, setError] = useState({});
    const [isSubmited, setSubmited] = useState(false);

    const onChange = (e) => {
        const { name, value } = e.target
        setValues({ ...values, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (submit) {
            setError(validate(values))
            setSubmited(true)
        }
    };

    useEffect(() => {
        setError(err)
        if (Object.keys(err).length === 0 && isSubmited) {
            callback();
            submit(values)
        }
    }, [err])

    return {
        handleSubmit,
        values,
        err,
        onChange
    }
}

export default useCreate
import { useState } from "react"

const useComment = (submitHemdler) => {
    const [values, setValues] = useState({ comment: '' })

    const onChange = (e) => {
        const { name, value } = e.target
        setValues(({ ...values, [name]: value }))
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        if (values.comment == '') {
            return
        }
        setValues({ comment: "" })

        if (submitHemdler) {
            submitHemdler(values)
        }
    }

    return {
        values,
        onChange,
        onSubmit
    }
}
export default useComment;
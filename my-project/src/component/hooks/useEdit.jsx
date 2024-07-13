import { useState } from "react"

const useEdit = (submitHemdler) => {
    const [valuess, setValues] = useState({
        shoseData: ''
    })

    const onChanges = (e) => {
        const { name, value } = e.target
        setValues(({ ...valuess, [name]: value }))
    }

    const onSubmitHandle = (e) => {
        e.preventDefault()

        if (submitHemdler) {
            submitHemdler(valuess)
        }
    }

    return {
        valuess,
        onChanges,
        onSubmitHandle
    }
}
export default useEdit;
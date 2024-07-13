import { useState } from "react"
import SingFormSuccsess from "./singFormSuccsess"
import Create from "./create/Create"

const SingForm = () => {
    const [isSubmited, setSubmited] = useState(false)

    const submitCreateForm = () => {
        setSubmited(true)
    }

    return (
        <div>
            {!isSubmited ? <Create submitCreateForm={submitCreateForm} /> : <SingFormSuccsess/>}
        </div>
    )
}

export default SingForm
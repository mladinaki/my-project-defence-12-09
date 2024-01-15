
const validateform = (values) => {

    const validataErr = {}
    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const patern_password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

    if (!values.username.trim()) {
        validataErr.username = 'Name is required';
    }

    if (!values.email) {
        validataErr.email = 'Email is Empty';

    } else if (!emailRgx.test(values.email)) {
        validataErr.email = 'Email address is invalid';
    }

    if (!values.password) {
        validataErr.password = 'Password is required';

    } else if (values.password.length < 5) {
        validataErr.password = 'Password must be at least 6 characters';
    }
    else if (values.password.length !== 6) {
        validataErr.password = 'Password is too long';
    }

    if (!values.confirmPassword) {
        validataErr.confirmPassword = 'Confirm Password is required!';

    } else if (values.confirmPassword !== values.password) {
        validataErr.confirmPassword = 'Password dont match!!!';
    }

    return validataErr
}

export default validateform;
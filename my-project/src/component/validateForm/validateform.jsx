
const validateform = (values) => {

    const validataErr = {}
    const emailRgx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // const patern_password = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/

    if (!values.username.trim()) {
        validataErr.username = 'Името е задължително!';
    }

    if (!values.email) {
        validataErr.email = 'Имейла е задължителен !';

    } else if (!emailRgx.test(values.email)) {
        validataErr.email = 'Имейл адресът е невалиден !';
    }

    if (!values.password) {
        validataErr.password = 'Паролата е задължителна !';

    } else if (values.password.length < 5) {
        validataErr.password = 'Паролата трябва да е поне 6 знака!';
    }
    else if (values.password.length !== 6) {
        validataErr.password = 'Паролата е твърде дълга !';
    }

    if (!values.confirmPassword) {
        validataErr.confirmPassword = 'Това поле е задължително !';

    } else if (values.confirmPassword !== values.password) {
        validataErr.confirmPassword = 'Пролите не съвпадат!!!';
    }

    return validataErr
}

export default validateform;
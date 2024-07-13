const validatecreate = (values) => {

    let err = {};

    const patern = /^$|^[0-9]+(\.[0-9]+)?$/
    const stringPatern = /^[A-Za-z]+$/
    const paternURL = /^(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/

    if (values.sneacersName === '') {
        err.sneacersName = 'Полето е задължително!'
    }
    else if (values.sneacersName.length <= 5) {
        err.sneacersName = 'Името е твърде кратко!'
    }

    if (!patern.test(values.price)) {
        err.price = 'Моля, въведете числова стойност!';

    } else if (values.price.length <= 1) {
        err.price = 'Полето е твърде кратко!'
    }

    if (!stringPatern.test(values.availablity)) {
        err.availablity = 'Моля, въведете стрингова стойност!'
    }

    else if (values.availablity.length <= 8) {
        err.availablity = 'Символите са твърде кратка или е число!'
    }

    if (!stringPatern.test(values.model)) {
        err.model = 'Моля, въведете стрингова стойност!'
    }

    else if (values.model.length <= 8) {
        err.model = 'Символите са твърде кратка или е число!'
    }

    if (!stringPatern.test(values.manifacture)) {
        err.manifacture = 'Моля, въведете стрингова стойност!'
    }

    else if (values.manifacture.length <= 8) {
        err.manifacture = 'Символите са твърде кратка или е число!'
    }

    if (!values.imageUrl) {
        err.imageUrl = 'Цената е задължителна!'
    }

    if (!stringPatern.test(values.description)) {
        err.description = 'Моля, въведете стрингова стойност!'
    }

    else if (values.description.length <= 8) {
        err.description = 'Символите са твърде кратка или е число!'
    }

    return err
}

export default validatecreate;
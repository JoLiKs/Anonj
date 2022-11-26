export const validate = values => {
    const errors = {};
    if(!values.text){
        errors.text = 'Поле обязательно для заполнения!';
    } else if (values.text.length < 15) {
        errors.text = 'Текст должен быть не менее 15 символов!'
    }
    return errors
};

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

export const asyncValidate = (values/*, dispatch */) => {
    return sleep(100)
        .then(() => {
            if (!values.title) {
                throw {title: 'Поле обязательно для заполнения!'}
            } else if (values.title.length > 10) {
                throw {title: 'Имя должно быть не более 10 символов!'}
            }

        })
};
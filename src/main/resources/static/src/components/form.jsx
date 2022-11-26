import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import {validate, asyncValidate} from '../formValidate';
import cls from '../App.module.css';

class Form extends Component {
   renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
        <div>
            <div>
                <input {...input} className={cls.inpName} placeholder="Набирать здесь..." type={type}/>
                {/* ошибка для поля*/}
                {touched && ((error && <div>{error}</div>))}
            </div>
        </div>
    );
    render(){
        const {handleSubmit, reset, error} = this.props;
        return (
            <form id="loginForm" onSubmit={handleSubmit}>
                {/* принимает функцию с реализацией поля*/}
                <label className={cls.labelName}>Введите ваше имя</label>
                <Field name="title" component={this.renderField}  label="Заголовок" type="text"/>
                <div className={cls.sendName}>
                <input type="submit" id="sendName" class="btn btn-default mt-2 bg-dark" value="Отправить"/>
                    {/*общая ошибка для формы*/}
                    {error && <div>{error}</div>}
                    </div>
            </form>
        );
    }
}

Form = reduxForm({
    form: 'post',
    // подключение валидации
    validate,
    asyncValidate
})(Form);

export default Form;


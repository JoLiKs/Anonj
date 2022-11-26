import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';


const Root = ({ store, children }) => (
  <Provider store={store}>{children}</Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
};



export default Root;
/*
import React, { Component } from 'react';
import cls from '../App.module.css';
import { Field, reduxForm } from 'redux-form';
import {validate, asyncValidate} from '../formValidate';

class SubBtn extends Component {
 renderField = ({ input, label, type, meta: { touched, error, warning }}) => (
        <div>
            <div>
                <input {...input} className={cls.inpName} placeholder="Набирать здесь..." type={type}/>

                {touched && ((error && <div>{error}</div>))}
            </div>
        </div>
    );
    render(){
    debugger
    const {handleSubmit} = this.props.onSubmit;
    if (this.props.config == "btn") {
    debugger
        return (
        <form id={this.props.id} onSubmit={handleSubmit}>
                <input type="submit" class="btn btn-default mt-2 bg-dark" value={this.props.val}/>
       </form>
        );
        }
    if (this.props.config == "btn&inp") {
            return (
            <form id={this.props.id} onSubmit={handleSubmit}>
                    <input type="submit" class="btn btn-default mt-2 bg-dark" value={this.props.val}/>
                    <Field name="title" component={this.renderField}  type="text"/>
           </form>
            );
            }
    }
}
SubBtn = reduxForm({
    subBtn: 'post'
})(SubBtn);
export default SubBtn;
*/
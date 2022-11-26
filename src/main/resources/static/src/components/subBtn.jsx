import React, { Component } from 'react';
import cls from '../App.module.css';
import { Field, reduxForm } from 'redux-form';
import {validate, asyncValidate} from '../formValidate';

class SubBtn extends Component {

    render(){

    const {handleSubmit} = this.props;
    if (this.props.config == "btn") {

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
    form: 'post'

})(SubBtn);
export default SubBtn;
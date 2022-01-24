import React, { Component } from 'react';
import { FormErrors } from '../components/FormsErrors';
import '../assets/style/form.scss';

export default class SubscibeFrom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            formErrors: { email: '' },
            emailValid: false,
            formValid: false,
            success: false,
        }
    }

    handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({ [name]: value },
            () => { this.validateField(name, value) });
    }

    validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let emailValid = this.state.emailValid;

        switch (fieldName) {
            case 'email':
                emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
                fieldValidationErrors.email = emailValid ? '' : ' is invalid';
                break;
            default:
                break;
        }
        this.setState({
            formErrors: fieldValidationErrors,
            emailValid: emailValid,
        }, this.validateForm);
    }

    validateForm() {
        this.setState({ formValid: this.state.emailValid && this.state.email.length > 0 });
        if (this.props.success) {
            this.setState({ formValid: true });
        }
    }

    errorClass(error) {
        return (error.length === 0 ? '' : 'has-error');
    }
    
    success = () => {
        this.setState({ success: true });
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        if (this.state.formValid) {
            console.log('Нет ошибок. Email:' + this.state.email);
            this.setState({ send: true });
            this.success();
        }
    }
    
    render() {
        return (
            <form className="form grid grid-cols-form gap-x-3" onSubmit={this.onSubmitForm}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <input type="email" required className="control w-full py-3 px-4" name="email"
                        placeholder="Enter your email"
                        value={this.state.email}
                        onChange={this.handleUserInput} />
                </div>
                <button type="submit" className={`btn btn-submit py-3 px-4 ${ !this.state.formValid === true ? 'pointer-events-none	 opacity-90' : ''}`} disabled={!this.state.formValid}>Request full demo</button>
                {this.state.send && <FormErrors formErrors={this.state.formErrors} />}
                <div className="panel panel-default relative">
                    <FormErrors formErrors={this.state.formErrors} />
                    {this.state.success && this.state.formValid &&
                        <div className="alert-success absolute top-0 left-0">Thank you for subscribe</div>
                    }
                </div>
            </form>
        )
    }
}
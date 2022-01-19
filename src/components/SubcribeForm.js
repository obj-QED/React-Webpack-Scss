import React, { Component } from 'react';
import { FormErrors } from '../components/FormsErrors';
import '../assets/style/form.scss';

class SubscibeFrom extends Component {
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
        this.setState({ formValid: this.state.emailValid });
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
            
            // block input and button
            // this.setState({
            //     email: '',
            //     formValid: false,
            //     success: false,
            // });

            this.success();
        }
    }

    render() {
        return (
            <form className="form mb-10" onSubmit={this.onSubmitForm}>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                    <label htmlFor="email">Email</label>
                    <input type="email" required className="form-control" name="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleUserInput} />
                </div>
                <button type="submit" className="btn btn-primary" disabled={!this.state.formValid}>Send</button>
                <div className="panel panel-default">
                    <FormErrors formErrors={this.state.formErrors} />
                </div>
                {this.state.success && <div className="alert-success">Thank you for subscribe</div>}
            </form>
        )
    }
}

export default SubscibeFrom;
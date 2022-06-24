import React, {Component} from "react";
import './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import is from 'is_js'

class Auth extends Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: '',
                type: 'email',
                label: 'Email',
                errorMessage: 'Введите корректный email',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }

            },
            password: {
                value: '',
                type: 'password',
                label: 'Пароль',
                errorMessage: 'Введите корректный пароль',
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6
                }
            }
        }
    }

    loginHandler = () => {

    }

    registrationHandler = () => {

    }

    formHandler = e => {
        e.preventDefault()
    }

    validateControl(value, validation) {
        if(!validation) {
            return true
        }

        let isValid = false

        if(validation.required){
            isValid = value.trim() !== '' && isValid
        }

        if(validation.email){
            isValid = is.email(value) && isValid
        }

        if(validation.minLength){
            isValid = value.length >= validation.minLength && isValid
        }
        return isValid
    }

    changeHandler = (event, controlName) => {

        const formControls = { ...this.state.formControls }
        const control = { ...formControls[controlName] }

        control.value = event.target.value
        control.touched = true
        control.valid = this.validateControl(control.value, control.validation)

        formControls[controlName] = control

        let isFormValid = true;

        Object.keys(formControls).forEach(name => {
            isFormValid = formControls[name].valid && isFormValid
        })

        this.setState({
            formControls, isFormValid
        })
    }

    renderInputs() {
        return Object.keys(this.state.formControls).map((controlName,index) => {
            const control = this.state.formControls[controlName]
            return (
                <Input
                    key={controlName + index}
                    type={control.type}
                    value={control.value}
                    valid={control.valid}
                    label={control.label}
                    touched={control.touched}
                    shoulValidate={!!control.validation}
                    errorMessage={control.errorMessage}
                    onChange={event => this.changeHandler(event, controlName)}
                />
            )
        })
    }

    render() {
        return (
            <div
                className='Auth'
            >
                <div>
                    <h1>Авторизация</h1>
                    <form
                        onSubmit={this.formHandler}
                        className='AuthForm'
                    >
                        {
                            this.renderInputs()
                        }
                        <Button
                            type='success'
                            onClick={this.loginHandler}
                            disabled={this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registrationHandler}
                            disabled={this.state.isFormValid}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        )
    }
}

export default Auth;
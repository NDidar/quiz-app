import React, {Component} from "react";
import './Auth.css'
import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";

class Auth extends Component {
    loginHandler = () => {

    }

    registrationHandler = () => {

    }

    formHandler = e => {
        e.preventDefault()
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
                        <Input
                            label='Email'
                        />
                        <Input
                            label='Password'
                        />

                        <Button
                            type='success'
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>
                        <Button
                            type='primary'
                            onClick={this.registrationHandler}
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
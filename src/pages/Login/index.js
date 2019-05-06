import React from 'react';
import './loginPage.js';
import { Container, Form } from './loginPage.js';
import { Link } from 'react-router-dom';

function Login() {
    function hungler(e) {
        e.preventDefault();
    }


    return (
        <Container>
            <link href="https://fonts.googleapis.com/css?family=Sofia" rel="stylesheet" />
            <header className="Login-header">
                <div className="container">
                    <Form onSubmit={hungler} className="form">
                        <div className="container-text">
                            <p className="loginText">Login</p>
                        </div>
                        <input type="text" name="usuario" placeholder="Username" />
                        <input type="password" name="senha" placeholder="password" />
                        <button type="submit">Entrar</button>
                        <hr />
                        <Link to="/signup">Cadastrar</Link>
                    </Form>
                </div>
            </header>
        </Container>
    );
}

export default Login;

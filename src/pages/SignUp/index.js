import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Form, Container } from './styles';
import logo from '../../assets/logo.png';

class SignUp extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        error: "",

    };

    handleSignUp = e => {
        e.preventDefault();
        alert("Eu vou te registrar");
    };


    render() {
        return (
            <Container>
                <Form onSubmit={this.handleSignUp}>
                    <img className="image" src={logo} />
                    {this.state.error && <p>{this.state.error}</p>}
                    <input
                        type="text"
                        placeholder="Username"
                        onChange={e => this.setState({ username: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Endereço de Email"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Senha"
                        onChange={e => this.setState({ password: e.target.value })}
                    />
                    <button type="submit">Cadastrar Grátis</button>
                    <hr />
                    <Link to="/">Fazer Login</Link>
                </Form>
            </Container>
        );
    }
}

export default SignUp;
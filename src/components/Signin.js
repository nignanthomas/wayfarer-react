/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import Menu from './global/Menu';
import '../styles/signup.scss';
import avatarMan from '../assets/images/avatar-man.png';
import Footer from './global/Footer';
import { signinAction } from '../redux/actions/authActions';

export class Signin extends Component {
  state = {
    isLoading: false,
    email: '',
    password: '',
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      dataError, status, history, data,
    } = nextProps;

    let token;
    switch (status) {
      case 'success':
        toast.success('Successfully Logged in!');
        history.push('/');
        token = data.data.token;
        window.localStorage.setItem('token', token);
        this.setState({ isLoading: false });
        break;
      case 'error':
        // eslint-disable-next-line no-case-declarations
        const { error } = dataError;
        toast.error(`${error}`);
        this.setState({ isLoading: false });
        break;
      default:
        break;
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  handleSubmit = async (e) => {
    const { props, state } = this;
    e.preventDefault();
    this.setState({ isLoading: true });

    const {
      email, password,
    } = state;

    await props.signinAction({
      email, password,
    });
  };

  render() {
    const { state } = this;
    const {
      email, password, isLoading,
    } = state;

    return (
      <div>
        <header>
          <Menu />
        </header>

        <section className="main">
          <div className="main-text">
            <div className="main-shadow" />
          </div>

          <div className="main-body">
            <div className="container">
              <div className="container">
                <div className="main-content">
                    <div className="form-box">
                      <h1>sign in</h1>
                      <img src={avatarMan} alt="" />
                      <hr />
                      <form action="" id="login-form" onSubmit={this.handleSubmit}>
                        <div className="forms">
                          <div className="formgroup" id="email-form">
                            <input data-test="email" type="email" id="email" name="email" required placeholder="email" value={email} onChange={this.handleChange} />
                          </div>

                          <div className="formgroup" id="password-form">
                            <input data-test="password" type="password" id="password" name="password" required placeholder="password" minLength="6" title="Six or more chareacters!" value={password} onChange={this.handleChange} />
                          </div>

                          <Button data-test="submitButton" type="submit" className="form-button">{isLoading ? <i style={{ fontSize: '20px' }} className="fas fa-spinner fa-pulse" /> : 'signin'}</Button>
                          <div className="form-bottom">
                            Not yet registered?
                            {' '}
                            <Link to="/signup">Sign Up!</Link>
                          </div>
                        </div>
                      </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    );
  }
}

Signin.propTypes = {
  signinAction: PropTypes.func,
  history: PropTypes.object,
  data: PropTypes.any,
  dataError: PropTypes.any,
  status: PropTypes.string,
};

export const mapStateToProps = (state) => ({
  data: state.authReducer.data,
  dataError: state.authReducer.dataError,
  status: state.authReducer.status,
});

export default connect(mapStateToProps, { signinAction })(Signin);

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
import { signupAction } from '../redux/actions/authActions';

export class Signup extends Component {
  state = {
    isLoading: false,
    email: '',
    first_name: '',
    last_name: '',
    password: '',
  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const {
      dataError, status, history,
    } = nextProps;

    switch (status) {
      case 'success':
        toast.success('Successfully Registered!');
        history.push('/');
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
      email, first_name, last_name, password,
    } = state;

    await props.signupAction({
      email, first_name, last_name, password,
    });

    // this.setState({ isLoading: false });
  };

  render() {
    const { state } = this;
    const {
      email, first_name, last_name, password, isLoading,
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
                      <h1>sign up</h1>
                      <img src={avatarMan} alt="" />
                      <hr />
                      <form action="" id="login-form" onSubmit={this.handleSubmit}>
                        <div className="forms">
                          <div className="formgroup" id="email-form">
                            <input data-test="email" type="email" id="email" name="email" required placeholder="email" value={email} onChange={this.handleChange} />
                          </div>
                          <div className="formgroup" id="fname-form">
                            <input data-test="first_name" type="text" id="fname" name="first_name" required placeholder="first name" maxLength="20" pattern="[A-Za-z]{2,}" value={first_name} onChange={this.handleChange} />
                          </div>
                          <div className="formgroup" id="lname-form">
                            <input data-test="last_name" type="text" id="lname" name="last_name" required placeholder="last name" maxLength="20" pattern="[A-Za-z]{2,}" value={last_name} onChange={this.handleChange} />
                          </div>
                          {/* <div className="formgroup" id="location-form">
                            <input type="text" id="location" name="location" required placeholder="location" maxLength="20" pattern="[A-Za-z]{2,}" />
                          </div> */}
                          <div className="formgroup" id="password-form">
                            <input data-test="password" type="password" id="password" name="password" required placeholder="password" minLength="6" title="Six or more chareacters!" value={password} onChange={this.handleChange} />
                          </div>
                          {/* <div className="formgroup" id="confirm-form">
                            <input type="password" id="confirm" name="confirm" required placeholder="confirm password" />
                          </div> */}
                          <div className="error-message" />
                          {/* <input type="submit" value={isLoading ? <i style={{ fontSize: '20px' }} className="fas fa-spinner fa-pulse" /> : 'Sign Up'} /> */}
                          <Button data-test="submitButton" type="submit" className="form-button">{isLoading ? <i style={{ fontSize: '20px' }} className="fas fa-spinner fa-pulse" /> : 'signup'}</Button>
                          <div className="form-bottom">
                            Already have an account?
                            {' '}
                            <Link to="/signin">Sign In!</Link>
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

Signup.propTypes = {
  signupAction: PropTypes.func,
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

export default connect(mapStateToProps, { signupAction })(Signup);

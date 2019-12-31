import React from 'react';
import { shallow } from 'enzyme';
import { Signup } from '../components/Signup';
import { mapStateToProps } from '../components/Signup';
import store from '../redux/store';

const mainState = {
  authReducer: {
    data: null,
    dataError: null,
    status: '',
  }
}

const props = {
  props: {
    authReducer: {
      data: null,
      dataError: null,
      status: '',
    }
  },
  history: {

  },
  signupAction: jest.fn()
}

const setUp = (initialState =  {}) => {
  const wrapper = shallow(
      <Signup {...props} store={store} />
  );
    return wrapper;
} 

describe('Signup Test Suite', () => { 
  it('Should Mount Successfully', () => {
    const component = setUp(mainState); 
    const handleSubmitSpy = jest.spyOn(component.instance(), 'handleSubmit');
    const email = { target: { name: 'email', value: 'johndoe@gmail.com' } };
    const first_name = { target: { name: 'first_name', value: 'john' } };
    const last_name = { target: { name: 'last_name', value: 'doe' } };
    const password = { target: { name: 'password', value: 'P@ssW0rD' } };
    
    component.find('[data-test="email"]').simulate('change', email);
    component.find('[data-test="first_name"]').simulate('change', first_name);
    component.find('[data-test="last_name"]').simulate('change', last_name);
    component.find('[data-test="password"]').simulate('change', password);
    component.find('[data-test="submitButton"]').simulate('click');
    component.find('form').simulate('submit', {
      preventDefault() {},
    });
  expect(handleSubmitSpy).toReturn();
  });

  it('Should Simulate Successfull Signup', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, status: 'success'});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledWith('/'); 
  }); 

  it('Should Simulate Failed Signup', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, dataError: { data: { message: 'Failed' } }, status: 'error'});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledTimes(0); 
  }); 

  it('Should Simulate Default Status', () => {
    const component = setUp(mainState); 
    component.setProps({history: {push: jest.fn()}, status: ''});
    const { push } = component.instance().props.history;
    expect(push).toHaveBeenCalledTimes(0);
  }); 

  it('Should return initial data', () => {
    const initialState = {
        authReducer: {
          data: null,
          dataError: null,
          status: '',
        }
    };
    expect(mapStateToProps(initialState).data).toEqual(null);
  });

});

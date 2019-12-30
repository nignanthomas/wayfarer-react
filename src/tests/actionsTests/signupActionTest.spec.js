import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { SIGNUP_SUCCESS, SIGNUP_ERROR } from '../../redux/actions/types';
import { signupAction } from '../../redux/actions/authActions';
import backendCall from '../../helpers/backendCall';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const userData = {
  email: 'johndoe@gmail.com',
  first_name: 'john',
  last_name: 'doe',
  password: 'P@ssW0rD',
}

describe('Signup Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install(backendCall);
  });

  afterEach(() => {
    moxios.uninstall(backendCall);
  });

  it('Should run trigger Error', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: {
          error: "Email already in use!",
        },
      });
    });

    const expectedActions = [{
      payload: {
        error: "Email already in use!",
      },
      type: SIGNUP_ERROR
    }];
    store = mockStore({});
    await store.dispatch(signupAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should run trigger success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: {
          message: 'Successfully Registered!',
          data: userData
        },
      });
    });

    const expectedActions = [{
      payload: {
        message: 'Successfully Registered!',
          data: userData
      },
      type: SIGNUP_SUCCESS
    }];
    store = mockStore({});
    await store.dispatch(signupAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});

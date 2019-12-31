import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { SIGNIN_SUCCESS, SIGNIN_ERROR } from '../../redux/actions/types';
import { signinAction } from '../../redux/actions/authActions';
import backendCall from '../../helpers/backendCall';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const userData = {
  email: 'johndoe@gmail.com',
  password: 'P@ssW0rD',
}

describe('Signin Actions Test Suite', () => {
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
        status: 404,
        response: {
          error: "Email not registered!",
        },
      });
    });

    const expectedActions = [{
      payload: {
        error: "Email not registered!",
      },
      type: SIGNIN_ERROR
    }];
    store = mockStore({});
    await store.dispatch(signinAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });

  it('Should run trigger success', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          message: 'Successfully Logged in!',
          data: userData
        },
      });
    });

    const expectedActions = [{
      payload: {
        message: 'Successfully Logged in!',
          data: userData
      },
      type: SIGNIN_SUCCESS
    }];
    store = mockStore({});
    await store.dispatch(signinAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});

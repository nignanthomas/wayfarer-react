import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { GET_TRIPS_SUCCESS, GET_TRIPS_ERROR } from '../../redux/actions/types';
import { getTripsAction } from '../../redux/actions/tripsActions';
import backendCall from '../../helpers/backendCall';

let store;
const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);


describe('Trips Actions Test Suite', () => {
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
          error: "No trips found!",
        },
      });
    });

    const expectedActions = [{
      payload: {
        error: "No trips found!",
      },
      type: GET_TRIPS_ERROR
    }];
    store = mockStore({});
    await store.dispatch(getTripsAction())
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
          message: 'Trips Successfully Retrieved!',
          data: []
        },
      });
    });

    const expectedActions = [{
      payload: {
        message: 'Trips Successfully Retrieved!',
        data: []
      },
      type: GET_TRIPS_SUCCESS
    }];
    store = mockStore({});
    await store.dispatch(getTripsAction())
      .then(async () => {
        const calledActions = store.getActions();
        expect(calledActions).toEqual(expectedActions);
      });
  });
});

import React from 'react';
import { shallow } from 'enzyme';
import { Home } from '../components/Home';
import { mapStateToProps } from '../components/Home';
import store from '../redux/store';

const mainState = {
  tripsReducer: {
    tripsData: null,
    tripsDataError: null,
    tripsStatus: '',
  }
}

const props = {
  props: {
    tripsReducer: {
      tripsData: {
        data: [
          {
            "id": 2,
            "seating_capacity": 24,
            "bus_license_number": "KLCK 46945",
            "origin": "Kigali",
            "destination": "Nairobi",
            "trip_date": "12-12-2020",
            "fare": 5000,
            "status": "active"
          },
          {
            "id": 4,
            "seating_capacity": 24,
            "bus_license_number": "KCPP 854",
            "origin": "Kampala",
            "destination": "Nairobi",
            "trip_date": "12-12-2020",
            "fare": 8000,
            "status": "active"
          },
          {
            "id": 3,
            "seating_capacity": 24,
            "bus_license_number": "KCP 854",
            "origin": "Arusha",
            "destination": "Nairobi",
            "trip_date": "12-12-2020",
            "fare": 7500,
            "status": "active"
          }
        ]
      },
      tripsDataError: null,
      tripsStatus: '',
    }
  },
  tripsData: {
    data: [
      {
        "id": 2,
        "seating_capacity": 24,
        "bus_license_number": "KLCK 46945",
        "origin": "Kigali",
        "destination": "Nairobi",
        "trip_date": "12-12-2020",
        "fare": 5000,
        "status": "active"
      },
      {
        "id": 4,
        "seating_capacity": 24,
        "bus_license_number": "KCPP 854",
        "origin": "Kampala",
        "destination": "Nairobi",
        "trip_date": "12-12-2020",
        "fare": 8000,
        "status": "active"
      },
      {
        "id": 3,
        "seating_capacity": 24,
        "bus_license_number": "KCP 854",
        "origin": "Arusha",
        "destination": "Nairobi",
        "trip_date": "12-12-2020",
        "fare": 7500,
        "status": "active"
      }
    ]
  },
  getTripsAction: jest.fn()
}

const setUp = (initialState =  {}) => {
  const wrapper = shallow(
      <Home {...props} store={store} />
  );
    return wrapper;
} 

describe('Home Test Suite', () => { 
  it('Should Mount Successfully', () => {
    const component = setUp(mainState); 
  expect(component.exists()).toBe(true);
  });

  it('Should Mount with tripsDataError', () => {
    const component = setUp(mainState);
    component.setProps({
      tripsData: null,
      tripsDataError: {
        message: 'Error'
      }
    })
  expect(component.exists()).toBe(true);
  });

  it('Should return initial data', () => {
    const initialState = {
      tripsReducer: {
        tripsData: null,
        tripsDataError: null,
        tripsStatus: '',
      }
    };
    expect(mapStateToProps(initialState).tripsData).toEqual(null);
  });

});

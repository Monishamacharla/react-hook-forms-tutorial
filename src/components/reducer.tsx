import React, { useReducer } from 'react';

const initialState = {
  name: {
    value: '',
    count: 0
  },
  email: {
    value: '',
    count: 0
  }
};

const reducer = (state: { [x: string]: any; }, action: { payload?: any; field?: any; type?: any; }) => {
  const { field, type } = action;
  switch (type) {
    case 'INCREMENT':
      return {
        ...state,
        [field]: {
          ...state[field],
          count: state[field].count + 1
        }
      };
    case 'DECREMENT':
      return {
        ...state,
        [field]: {
          ...state[field],
          count: state[field].count - 1
        }
      };
    case 'UPDATE':
      return {
        ...state,
        [field]: {
          ...state[field],
          value: action.payload
        }
      };
    default:
      return state;
  }
};

const UserProfile = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleIncrement = (field: string) => {
    dispatch({ type: 'INCREMENT', field });
  };

  const handleDecrement = (field: string) => {
    dispatch({ type: 'DECREMENT', field });
  };

  const handleUpdate = (field: string, value: string) => {
    dispatch({ type: 'UPDATE', field, payload: value });
  };

  return (
    <div>
      <h2>User Profile</h2>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={state.name.value}
          onChange={(e) => handleUpdate('name', e.target.value)}
        />
        <button onClick={() => handleIncrement('name')}>+</button>
        <span>Count: {state.name.count}</span>
        <button onClick={() => handleDecrement('name')}>-</button>
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={state.email.value}
          onChange={(e) => handleUpdate('email', e.target.value)}
        />
        <button onClick={() => handleIncrement('email')}>+</button>
        <span>Count: {state.email.count}</span>
        <button onClick={() => handleDecrement('email')}>-</button>
      </div>
    </div>
  );
};

export default UserProfile;

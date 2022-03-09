import Cookies from 'js-cookie';

const { createContext, useReducer } = require('react');

export const Store = createContext();
const initState = {
  darkMode: Cookies.get('darkMode') === 'ON' ? true : false,
};

function reducer(state, action) {
  switch (action.type) {
    case 'DARK_MODE_ON':
      return { ...state, darkMode: true };
    case 'DARK_MODE_OFF':
      return { ...state, darkMode: false };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initState);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}

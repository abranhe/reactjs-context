import React, { createContext, useReducer } from 'react';
import connect from './withContext';

const Context = createContext();
const Consumer = Context.Consumer;

function Provider({ children, initialState = {}, reducer }) {
  let [ state, dispatch ] = useReducer(reducer, initialState);
  let value = { state, dispatch };

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export { Context, Provider, Consumer, connect };

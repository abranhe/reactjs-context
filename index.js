import React, {createContext, useReducer} from 'react';
import PropTypes from 'prop-types';
import connect from './connect';

const Context = createContext();
const {Consumer} = Context;

function Provider({children, initialState, reducer}) {
	const [state, dispatch] = useReducer(reducer, initialState);
	const value = {state, dispatch};

	return <Context.Provider value={value}>{children}</Context.Provider>;
}

Provider.propTypes = {
	children: PropTypes.node.isRequired,
	initialState: PropTypes.object,
	reducer: PropTypes.func
};

Provider.defaultProps = {
	initialState: {},
	reducer: Function.prototype
};

export {Provider, Consumer, connect};

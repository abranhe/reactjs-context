
[<img src="https://cdn.abranhe.com/projects/reactjs-context/logo.png" width="100">](https://p.abranhe.com/reactjs-context)

# reactjs-context 

[![gh](https://github.com/abranhe/reactjs-context/workflows/build/badge.svg)](https://github.com/abranhe/reactjs-context/actions) [![travis](https://img.shields.io/travis/abranhe/reactjs-context?logo=travis)](https://travis-ci.org/abranhe/reactjs-context) [![license](https://img.shields.io/github/license/abranhe/reactjs-context.svg)](https://github.com/abranhe/reactjs-context/blob/master/license) [![npm](https://img.shields.io/npm/v/reactjs-context.svg?logo=npm)](https://github.com/abranhe/reactjs-context)

Reactjs-Context (`reactjs-context`) is a simple library made to easily work with [React Context API](https://reactjs.org/docs/context.html); but why to use React Context API if [Redux](https://redux.js.org) exists?

Well,

[<img src="https://cdn.abranhe.com/projects/reactjs-context/tweet.png" width="400">](https://twitter.com/dan_abramov/status/1097866569701621763)

In other words: *removing react-redux from our apps*.

In smalls projects I saw myself repeating the same code over-and-over again so I decided to make it a little bit more reusable.

## Content 

- [Install](#install)
- [Usage](#usage)
- [Questions](#questions)
- [License](#license)
- [Demo](https://reactjs-context.demos.abranhe.com)
- [Demo source code](https://github.com/abranhe/public-demos/tree/master/reactjs-context)

## Install

```
$ npm install reactjs-context
```

<details open>
<summary>
  Other options?
</summary>

###### npm

```
$ npm install reactjs-context
```

###### yarn

```
$ yarn add reactjs-context
```

###### Github Registry

```
$ npm install abranhe@reactjs-context
```

</details>

## Usage

```js
import React from 'react';
import { Provider, Consumer } from 'reactjs-context';

const initialState = { counter: 0 };

const actions = (dispatch) => ({
  increment: () => dispatch({ type: 'increment' }),
  decrement: () => dispatch({ type: 'decrement' }),
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { counter: state.counter + 1 };
    case 'decrement':
      return { counter: state.counter - 1 };
  }
};


export default () => {
  return(
    <Provider initialState={initialState} reducer={reducer}>
        <Consumer>
          {({ state, dispatch }) => {
            const { increment, decrement } = actions(dispatch);
            return (
              <div>
                <h1>{state.counter}</h1>
                <div>
                  <button onClick={() => decrement()}>-</button>
                  <button onClick={() => increment()}>+</button>
                </div>
              </div>
            );
          }}
        </Consumer>
    </Provider>
  );
};
```

This is a simple demo demostrating the usage of `reactjs-context` with a countere demo.

[<img src="https://cdn.abranhe.com/projects/reactjs-context/demo.png" width="500">](https://reactjs-context.demos.abranhe.com)

## Questions?

You can ask your question on [Stackoverflow](https://stackoverflow.com) open a new issue, or DM me on Twitter [@abranhe](https://twitter.com/abranhe).

## New features?

I will try to implement `newReducer()` or `newAction()` that instead of creating that ouside of the package, just add a new action and the action lives on a global object inside of the package. It will also have default actions: like `reset()`. Please don't laugh, this is just me writing down ideas to come back later.

Idea example: 

```js
import { newAction } from 'reactjs-context';

newAction({ 
  increment: () => {
    return dispatch({ type: 'increment' });
  },
});
```

## License

MIT © [Carlos Abraham](https://github.com/abranhe). React logo belongs to Facebook Inc.
import React from 'react';
import { Consumer } from '.';

const withContext = (Component) => {
  return (props) => (
    <Consumer>
      {(context) => {
        return <Component {...props} context={context} />;
      }}
    </Consumer>
  );
};

export default withContext;

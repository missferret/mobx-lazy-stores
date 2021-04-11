
import React from 'react';
import { Provider } from 'mobx-react';

const WithMobx = (Comp: any, store: any) => {
  return class WithMobx extends React.Component {
    render () {
      return (
        <Provider store={store}>
            <Comp {...this.props} />
        </Provider>
    );
    }
  };
};

export default WithMobx;

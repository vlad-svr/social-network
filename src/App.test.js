import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import store from './redux/redux-store';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';

test('renders learn react link', () => {
  const { getByText, ...param } = render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  console.log(param.baseElement)
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

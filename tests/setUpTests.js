/* eslint-disable no-undef */
import React from 'react';
import '@testing-library/react';
import '@testing-library/jest-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from '@testing-library/react';
import { GoogleOAuthProvider } from '@react-oauth/google';

// Mocking useNavigate
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: ()=>jest.fn(),
}));

// Wrapping tests with Router and GoogleOAuthProvider
const customRender = (ui, options) =>
  render(
    <Router>
      <GoogleOAuthProvider>
        {ui}
      </GoogleOAuthProvider>
    </Router>,
    options
  );

export * from '@testing-library/react';
export { customRender as render };
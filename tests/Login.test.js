/* eslint-disable no-undef */
import React from "react";

import { render, fireEvent } from './setUpTests';

import LoginPage from "../src/components/login";

import { describe } from "node:test";

// Mock the GoogleLogin component to simulate a successful login
        
jest.mock('@react-oauth/google', () => ({
            
    GoogleLogin: ({ onSuccess }) => (          
        <button onClick={() => onSuccess({ credential: 'mocked-credential' })}>  
            Sign in with Google             
        </button>              
    ),           
}));
        

describe('LoginPage', () => {

    // When using the useLocation hook, the pathname resolves to /home
    // When using the window.location object, the pathname resolves to /
    // This test uses the window.location object
    it('redirects to / once there is a success event on GoogleLogin', () => {
    
        const { getByText } = render(<LoginPage />);
        
        // Click the "Sign in with Google" button
        fireEvent.click(getByText('Sign in with Google'));
        
        // Assert that the navigation to "/" has occurred
        expect(window.location.pathname).toBe('/');
        
    });
    
});
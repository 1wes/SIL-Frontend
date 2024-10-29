/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "./setUpTests";

import Users from "../src/components/home";
import * as swr from 'swr';

jest.mock('swr');

describe('Users Component', () => {
  test('should display a list of users', async () => {
    // Mock user data
    const mockUsers = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ];

    // Mock the useSWR hook to return user data
    swr.default.mockReturnValue({ data: mockUsers });

    render(<Users />);

    // Ensure the user names are displayed
    await waitFor(() => {
      expect(screen.getByText('User 1')).toBeInTheDocument();
      expect(screen.getByText('User 2')).toBeInTheDocument();
    });

    await waitFor(() => {
      const user1Element = screen.getByText('User 1');
      const user2Element = screen.getByText('User 2');
    
      expect(user1Element).toBeInTheDocument();
      expect(user2Element).toBeInTheDocument();
    
    });
  });

  test("should display the correct number of albums for a specific user", async () => {
    
    const mockUsers = [
      { id: 1, name: 'User 1' },
      { id: 2, name: 'User 2' },
    ];

    // Mock albums data for each user
    const mockAlbums = {
      1: [{ id: 1, title: 'Album 1' }, { id: 2, title: 'Album 2' }],
      2: [{ id: 3, title: 'Album 3' }],
    };

      // Mock the useSWR hook to return user data
      swr.default.mockReturnValue({ data: mockUsers });

      render(<Users />);
  
      // Ensure the user names are displayed
      await waitFor(() => {
        expect(screen.getByText('User 1')).toBeInTheDocument();
        expect(screen.getByText('User 2')).toBeInTheDocument();
      });
  
      // Mock the useSWR hook to return albums data for each user
      swr.default.mockImplementation((key) => {
        const userId = key.split('/').pop();
        return { data: mockAlbums[userId] || [] };
      });
  
      // Ensure the correct number of albums is displayed for a specific user
      await waitFor(() => {
        const user1Element = screen.getByText('User 1');
        const user2Element = screen.getByText('User 2');
      
        expect(user1Element).toBeInTheDocument();
        expect(user2Element).toBeInTheDocument();
      
        // Additional test: Check if the correct number of albums is displayed for a specific user
        const specificUserId = 1;
        const specificUserElement = screen.getByText(`User ${specificUserId}`);
        const specificUserAlbumsElement = specificUserElement.closest('.user-card').querySelector('.no-of-albums');
        expect(specificUserAlbumsElement).toHaveTextContent(`${mockAlbums[specificUserId].length} Albums`);
      });
  })
});



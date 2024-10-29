/* eslint-disable no-undef */
import React from "react";
import { render, screen, waitFor } from "./setUpTests";
import Photo from "../src/components/photo";
import * as swr from "swr";

jest.mock("swr");

describe("Photo Component", () => {
    test("should display a photo", async () => {
      
        // Mock photo data
        const mockPhoto = {
            id: 1,
            title: 'Photo 1',
            url: 'https://example.com/photo.jpg'
        };
        

        // Mock the useSWR hook to return photo data
        swr.default.mockImplementation((key, fetcher) => {
            if (typeof fetcher === "function") {
                return { data: mockPhoto, error: null };
            } else {
                throw new Error("Invalid fetcher function");
            }
        });
        
                
        render(<Photo />);
        
        // Ensure the photo is displayed
        await waitFor(() => {
        
            const imageElement = screen.getByAltText("retrievedPhoto")
            expect(imageElement).toBeInTheDocument();
            expect(imageElement).toHaveAttribute('src', mockPhoto.url);
        });
    });
});


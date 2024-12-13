import { Button } from '@chakra-ui/react';
import React from 'react';

// Pagination component that renders a set of page buttons
const Pagination = ({ totalCount, handlePageChange, current_page }) => {
  return (
    // Create an array based on totalCount and generate a button for each page
    new Array(totalCount).fill(0).map((el, i) => {
      return (
        // Button for each page, using the index (i) to determine the page number
        <Button
          key={i} // Set the unique key for each button (required for lists in React)
          onClick={() => handlePageChange(i + 1)} // When clicked, trigger the handlePageChange function with the page number (i + 1)
          style={{
            margin: "12px", // Add margin around the button
            padding: "10px", // Add padding inside the button
            border: "none", // Remove the button border
            borderRadius: "50px", // Make the button rounded
            width: "40px", // Set the width of the button
            backgroundColor: current_page === i + 1 ? "grey" : null, // Change the background color to grey if it's the current page
            cursor: "pointer", // Change the cursor to pointer on hover, indicating the button is clickable
          }}
        >
          {i + 1} {/* Display the page number (i + 1) */}
        </Button>
      );
    })
  );
};

export default Pagination; // Export the Pagination component


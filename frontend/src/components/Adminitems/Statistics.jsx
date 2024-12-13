import { Box, Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import AdminNavTop from "../AdminNavTop";

// Statistics component to display various charts (Line, Pie, Bar)
const Statistics = () => {
  // Data for Line chart (Subscriber count over months)
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels for months
    datasets: [
      {
        label: "Subscriber", // The label for this dataset
        data: [100, 200, 150, 250, 300, 200], // Data points for each month
        fill: false, // Disable fill under the line
        borderColor: "red", // Line color
      },
    ],
  };

  // Data for Pie chart (Course distribution)
  const datapie1 = {
    labels: ["Full Stack", "Frontend", "Backend"], // Labels for the Pie chart slices
    datasets: [
      {
        data: [300, 50, 100], // Data representing the number of students in each course
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Color for each slice
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"], // Color on hover
      },
    ],
  };

  // Data for Bar chart (Monthly sales)
  const databar = {
    labels: ["January", "February", "March", "April", "May", "June"], // X-axis labels for months
    datasets: [
      {
        label: "Courses", // Label for this dataset
        data: [12, 19, 3, 5, 2, 3], // Number of courses sold each month
        backgroundColor: "#f038d7", // Bar color
        borderColor: "teal", // Border color for bars
        borderWidth: 1, // Border width
      },
    ],
  };

  return (
    // Main grid layout container
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* AdminNavTop is the top navigation bar */}
      <Box mt='80px'>
        <AdminNavTop />

        {/* Grid layout for chart sections */}
        <Grid
          templateColumns={{
            xl: "repeat(2,1fr)", // Two columns for large screens
            lg: "repeat(2,1fr)", // Two columns for medium screens
            base: "repeat(1,1fr)", // One column for mobile screens
          }}
        >
          {/* Line Chart for total customer interaction */}
          <Box
            w={{ xl: "600px", lg: "600px", base: "50%" }} // Adjust width for different screen sizes
            h="400px" // Set height for the chart box
            p={4}
            borderWidth={1}
            borderColor="gray.200"
            borderRadius="md"
          >
            <h2>Total Customer Interaction</h2>
            {/* Render the Line chart */}
            <Line data={data} />
          </Box>

          {/* Pie Chart for course distribution */}
          <Flex align="center" maxHeight="60vh">
            <Box p={4} boxShadow="md">
              <Text fontSize="xl" fontWeight="bold" mb={4}>
                Courses Distribution
              </Text>
              <Box height="300px">
                {/* Render the Pie chart */}
                <Pie data={datapie1} options={{ maintainAspectRatio: false }} />
              </Box>
            </Box>
          </Flex>
        </Grid>

        {/* Bar Chart for monthly sales */}
        <Flex
          align="center"
          justify="center"
          minHeight={{ xl: "60vh", lg: "60vh", base: "30vh" }}
          w={{ xl: "600px", lg: "600px", base: "80%" }} // Adjust width based on screen size
        >
          <Box p={4} boxShadow="md" w="100%">
            <Text fontSize="xl" fontWeight="bold" mb={4}>
              Monthly Sales
            </Text>
            <Box height="300px">
              {/* Render the Bar chart */}
              <Bar data={databar} options={{ maintainAspectRatio: false }} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default Statistics; // Export the Statistics component for use in other parts of the app


import { Box, Flex, Grid, Icon, Text } from "@chakra-ui/react";
import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";
import AdminNavTop from "../AdminNavTop";
import { BiMale } from "react-icons/bi";
import { FaVideo } from "react-icons/fa";
import { FiBook, FiFilm } from "react-icons/fi";

const DashBoard = () => {
  // Bar chart data for monthly sales
  const data = {
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        label: "Courses",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: "rgba(235, 50, 90, 0.6)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

  // Pie chart data for course categories
  const datapie = {
    labels: ["Full Stack", "Frontend", "Backend"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Pie chart data for video categories
  const datapie1 = {
    labels: ["live", "recorded", "offline"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  return (
    <Box>
      {/* Top-level container for navigation and dashboard content */}
      <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
        {/* Navigation Section */}
        <Box>
          {/* Admin Sidebar (commented out for now) */}
        </Box>

        {/* Dashboard Content Section */}
        <Box mt="80px">
          {/* Top Navigation Bar */}
          <AdminNavTop />

          {/* Main Dashboard Area */}
          <Box h={"130vh"} p={5}>
            {/* Statistics Cards */}
            <Grid
              templateColumns={{
                xl: "repeat(4,1fr)", // 4 columns on extra-large screens
                lg: "repeat(2,1fr)", // 2 columns on large screens
                base: "repeat(1,50vh)", // 1 column on small screens
              }}
              gap={10}
              boxShadow="xl"
              rounded="md"
            >
              {/* Total Subscribers Card */}
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Subscriber</Text>
                  <Icon as={BiMale} boxSize={8} />
                </Flex>
                <Text mt={15}>Count 2344</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+14%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>

              {/* Total Videos Card */}
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Videos</Text>
                  <FaVideo size={24} />
                </Flex>
                <Text mt={15}>Count 5123</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+60%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>

              {/* Total Courses Card */}
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total Courses</Text>
                  <FiBook size={24} />
                </Flex>
                <Text mt={15}>Count 1200</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+5%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>

              {/* Total Watch Time Card */}
              <Box border={"2px solid gray"} borderRadius={10} p={5}>
                <Flex justify={"space-between"}>
                  <Text fontWeight={"bold"}>Total WatchTime</Text>
                  <FiFilm size={24} />
                </Flex>
                <Text mt={15}>Count 999+hrs</Text>
                <Flex mt={15} justify={"space-between"}>
                  <Text>+45%</Text>
                  <Text>Since last month</Text>
                </Flex>
              </Box>
            </Grid>

            {/* Bar Chart Section */}
            <Flex align={{ xl: "center", lg: "center", base: "left" }} minHeight="60vh">
              <Box
                p={{ xl: 4, lg: 4, base: 0 }}
                boxShadow="md"
                w={{ xl: "100%", lg: "100vh", base: "50vh" }}
              >
                <Text fontSize="xl" fontWeight="bold" mb={4}>
                  Monthly Sales
                </Text>
                <Box height="300px">
                  <Bar data={data} options={{ maintainAspectRatio: false }} />
                </Box>
              </Box>
            </Flex>

            {/* Pie Charts Section */}
            <Grid
              templateColumns={{
                xl: "repeat(2,1fr)", // 2 columns on large screens
                lg: "repeat(2,1fr)",
                base: "repeat(1,1fr)", // 1 column on small screens
              }}
            >
              {/* Courses Pie Chart */}
              <Flex align="center" justify="center" maxHeight="60vh">
                <Box p={4} boxShadow="md">
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Courses
                  </Text>
                  <Box height="300px">
                    <Pie data={datapie} options={{ maintainAspectRatio: false }} />
                  </Box>
                </Box>
              </Flex>

              {/* Videos Category Pie Chart */}
              <Flex align="center" justify="center" maxHeight="60vh">
                <Box p={4} boxShadow="md">
                  <Text fontSize="xl" fontWeight="bold" mb={4}>
                    Videos Category
                  </Text>
                  <Box height="300px">
                    <Pie data={datapie1} options={{ maintainAspectRatio: false }} />
                  </Box>
                </Box>
              </Flex>
            </Grid>
          </Box>
        </Box>
      </Grid>
    </Box>
  );
};

export default DashBoard;

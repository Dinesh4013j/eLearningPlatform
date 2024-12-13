import {
  Box,
  Button,
  Flex,
  Grid,
  Image,
  Text,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AdminNavTop from "../AdminNavTop";

// Sample discount data
const data = [
  {
    image:
      "https://images.unsplash.com/photo-1607082349566-187342175e2f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGlzY291bnR8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    desc: "50% Discount available",
  },
  // Additional items with the same structure...
];

const Discount = () => {
  // State to manage discount data
  const [discount, setDiscount] = useState(data);

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* Admin Sidebar (commented out for now) */}
      {/* <AdminSidebar /> */}

      {/* Main Content */}
      <Box mt="80px">
        {/* Admin Top Navigation */}
        <AdminNavTop />

        {/* Discount Cards */}
        <Grid
          templateColumns={{
            xl: "repeat(3,1fr)", // 3 columns on extra-large screens
            lg: "repeat(2,1fr)", // 2 columns on large screens
            base: "repeat(1,1fr)", // 1 column on small screens
          }}
          gap={10}
        >
          {/* Map through the discount data to render each item */}
          {discount.map((el, i) => {
            return (
              <Box
                key={i} // Unique key for each item
                border={"2px solid black"}
                p={2}
                borderRadius={10}
              >
                {/* Image Section */}
                <Box
                  border={"2px solid red"}
                  w={"50vh"} // Fixed width for images
                  p={2}
                  borderRadius={10}
                >
                  <Image src={el.image} />
                </Box>
                {/* Discount Description */}
                <Text>{el.desc}</Text>
                {/* Action Buttons */}
                <Flex justify={"space-around"}>
                  <Button>Delete</Button> {/* Button to delete the item */}
                  <Button>Enable/Disable</Button> {/* Toggle enable/disable */}
                </Flex>
              </Box>
            );
          })}
        </Grid>
      </Box>
    </Grid>
  );
};

export default Discount;

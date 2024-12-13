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

const data = [
  { image: "image_url", desc: "50% Discount available", id: 1, status: true },
  { image: "image_url", desc: "50% Discount available", id: 2, status: true },
  { image: "image_url", desc: "50% Discount available", id: 3, status: true },
  { image: "image_url", desc: "50% Discount available", id: 4, status: true },
  { image: "image_url", desc: "50% Discount available", id: 5, status: true },
  { image: "image_url", desc: "50% Discount available", id: 6, status: true },
  { image: "image_url", desc: "50% Discount available", id: 7, status: true },
  { image: "image_url", desc: "50% Discount available", id: 8, status: true },
  { image: "image_url", desc: "50% Discount available", id: 9, status: true },
  { image: "image_url", desc: "50% Discount available", id: 10, status: true },
];

const GiftCard = () => {
  const [discount, setDiscount] = useState(data); // State to store the list of gift cards

  // Function to delete a gift card
  const handleDelete = (id) => {
    const updatedData = discount.filter((el) => el.id !== id); // Remove card with the given id
    setDiscount(updatedData); // Update state with the new list
  };

  // Function to toggle card status (Enable/Disable)
  const handleClick = (id) => {
    setDiscount(discount.map((el) =>
      el.id === id ? { ...el, status: !el.status } : el
    ));
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt='80px'>
        <AdminNavTop />
        {/*  */}
        <Grid
          templateColumns={{
            xl: "repeat(3,1fr)",
            lg: "repeat(2,1fr)",
            base: "repeat(1,1fr)",
          }}
          gap={10}
        >
          {/* Display each gift card */}
          {discount.map((el, i) => (
            <Box key={i} border={"2px solid black"} p={2} borderRadius={10}>
              <Box
                border={"2px solid red"}
                w={"50vh"}
                p={2}
                borderRadius={10}
              >
                <Image src={el.image} />
              </Box>
              <Text>{el.desc}</Text>
              <Flex justify={"space-around"}>
                <Button onClick={() => handleDelete(el.id)}>Delete</Button>
                <Button onClick={() => handleClick(el.id)}>
                  {el.status ? "Enable" : "Disable"}
                </Button>
              </Flex>
            </Box>
          ))}
        </Grid>
      </Box>
    </Grid>
  );
};

export default GiftCard;


import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
// Importing Redux hooks and actions
import { useDispatch } from "react-redux";
import { addProduct } from "../../Redux/AdminReducer/action";
// Importing Router for navigation
import { useNavigate } from "react-router-dom";
// Importing custom components
import AdminNavTop from "../AdminNavTop";

const AddCourse = () => {
  const dispatch = useDispatch(); // Redux dispatcher to trigger actions
  const navigate = useNavigate(); // For navigation between routes

  // Initial course object
  let obj = {
    title: "",
    description: "",
    category: "",
    price: "",
    img: "",
  };

  const [detail, setDetail] = useState(obj); // State to manage course details

  // Handle input field changes and update state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value };
    });
  };

  // Handle form submission
  const handleSubmit = () => {
    dispatch(addProduct(detail)); // Dispatch the add product action
    alert("Course Added Successfully"); // Success notification
    navigate("/admin/courses"); // Redirect to the courses page
  };

  return (
    <Grid className="Nav" h="99vh" w="94%" gap={10}>
      {/* Admin Top Navigation */}
      <Box mt="80px">
        <AdminNavTop />

        {/* Form Container */}
        <Box border="2px solid gray" borderRadius={10} p={10} h="90%">
          {/* Title Input */}
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Title"
              name="title"
              value={detail.title}
              onChange={handleChange}
            />
          </FormControl>

          {/* Description Input */}
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              placeholder="Enter Course description"
              name="description"
              value={detail.description}
              onChange={handleChange}
            />
          </FormControl>

          {/* Category Input */}
          <FormControl mt={4}>
            <FormLabel>Category</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course Category"
              name="category"
              value={detail.category}
              onChange={handleChange}
            />
          </FormControl>

          {/* Price Input */}
          <FormControl mt={4}>
            <FormLabel>Price</FormLabel>
            <Input
              type="number"
              placeholder="Enter Course price"
              name="price"
              value={Number(detail.price)}
              onChange={handleChange}
            />
          </FormControl>

          {/* Thumbnail Input */}
          <FormControl mt={4}>
            <FormLabel>Thumbnail</FormLabel>
            <Input
              type="text"
              placeholder="Enter Course thumbnail Link"
              name="img"
              value={detail.img}
              onChange={handleChange}
            />
          </FormControl>

          {/* Submit Button */}
          <Button
            mt={4}
            colorScheme="red"
            size="md"
            isFullWidth
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddCourse;


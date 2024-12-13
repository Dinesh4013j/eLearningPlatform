import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";
import "./edit.css"; // Custom styles for the page
import AdminNavTop from "../AdminNavTop"; // Admin top navigation bar
import { useDispatch, useSelector } from "react-redux"; // For Redux state management
import { useNavigate, useParams } from "react-router-dom"; // For navigation and getting URL params
import { patchProduct } from "../../Redux/AdminReducer/action"; // Action to update product

const EditPage = () => {
  // Background image URL for the edit page
  const backgroundImageUrl =
    "https://png.pngtree.com/background/20211217/original/pngtree-red-round-technology-dashboard-picture-image_1598386.jpg";

  // Getting the product ID from the URL parameters
  const { id } = useParams();

  // Dispatch and state selection from Redux
  const dispatch = useDispatch();
  const store = useSelector((store) => store.AdminReducer.data);

  // Filtering the product data from Redux store based on the product ID
  const existedUser = store.filter((el) => el._id == id);

  // Redirect navigation using React Router
  const navigate = useNavigate();

  // Default object for the form based on the existing product data
  let obj = {
    title: existedUser[0]?.title,
    description: existedUser[0]?.description,
    category: existedUser[0]?.category,
    price: existedUser[0]?.price,
    teacher: existedUser[0]?.teacher,
    img: existedUser[0]?.img || "", // Fallback if no image URL is present
  };

  // State for storing the product details while editing
  const [detail, setDetail] = useState(obj);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value }; // Update the specific field in the state
    });
  };

  // Handle form submission to update the product
  const handleSubmit = () => {
    dispatch(patchProduct(id, detail)); // Dispatch the patch action to update the product
    alert("Data Updated Successfully"); // Show a success message
    navigate("/admin/courses"); // Navigate back to the courses list
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* <AdminSidebar/>  */}

      {/* Main content container */}
      <Box mt="80px">
        <AdminNavTop /> {/* Admin top navigation bar */}

        {/* Form container with a background image */}
        <Flex
          align="center"
          justify="center"
          border={"2px solid white"}
          borderRadius={10}
          className="background"
          style={{
            backgroundImage: `url(${backgroundImageUrl})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "100vh",
          }}
          color="white" // Text color white for contrast
          fontWeight={"bold"}
        >
          {/* Form box with responsive width */}
          <Box width={["100%", "80%", "60%", "40%"]} p={4}>
            {/* Form to edit product details */}
            <FormControl>
              <FormLabel>Course Title</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                placeholder="Enter Course Title"
                name="title"
                value={detail?.title}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Course Description</FormLabel>
              <Textarea
                placeholder="Enter Course description"
                border={"1px solid"}
                name="description"
                value={detail?.description}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Category</FormLabel>
              <Input
                type="text"
                placeholder="Enter Course Category"
                border={"1px solid"}
                name="category"
                value={detail?.category}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Course Price</FormLabel>
              <Input
                type="number"
                placeholder="Enter Course price"
                border={"1px solid"}
                name="price"
                value={detail?.price}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Instructor</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                name="teacher"
                value={detail?.teacher}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Image</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                name="img"
                value={detail?.img}
                onChange={handleChange}
              />
            </FormControl>

            {/* Submit button */}
            <Button
              mt={4}
              colorScheme="red"
              size="md"
              isFullWidth
              onClick={handleSubmit} // Calls the handleSubmit function when clicked
            >
              Submit
            </Button>
          </Box>
        </Flex>
      </Box>
    </Grid>
  );
};

export default EditPage;

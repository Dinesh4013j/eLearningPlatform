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
// Importing Admin navigation component
import AdminNavTop from "../AdminNavTop";
// Importing Redux hooks and actions
import { useDispatch } from "react-redux";
import { addUser } from "../../Redux/AdminReducer/action";
// Importing navigation hook
import { useNavigate } from "react-router-dom";

const AddUser = () => {
  const dispatch = useDispatch(); // Initialize dispatch for Redux actions
  const navigate = useNavigate(); // Hook to handle route navigation

  // Initial state for user details
  let obj = {
    name: "",
    email: "",
    password: "",
    city: "",
    age: "",
    job: "",
    image: "",
  };

  const [detail, setDetail] = useState(obj); // State to manage user details form

  // Handler for updating the state as the user types in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value }; // Update the specific field in the object
    });
  };

  // Handler for submitting the form
  const handleSubmit = () => {
    dispatch(addUser(detail)); // Dispatch the `addUser` action with the form data
    alert("User Added Successfully"); // Notify the user of successful addition
    navigate("/admin/users"); // Redirect to the admin users page
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* Top navigation for Admin */}
      <Box mt="80px">
        <AdminNavTop />

        {/* Form container with border and padding */}
        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          {/* Name Input */}
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input
              type="text"
              placeholder="Enter User Name"
              name="name"
              value={detail.name}
              onChange={handleChange}
            />
          </FormControl>

          {/* Email Input */}
          <FormControl mt={4}>
            <FormLabel>Email</FormLabel>
            <Textarea
              type="email"
              placeholder="Enter Email"
              name="email"
              value={detail.email}
              onChange={handleChange}
            />
          </FormControl>

          {/* Password Input */}
          <FormControl mt={4}>
            <FormLabel>Password</FormLabel>
            <Input
              type="password"
              placeholder="Enter Password"
              name="password"
              value={detail.password}
              onChange={handleChange}
            />
          </FormControl>

          {/* City Input */}
          <FormControl mt={4}>
            <FormLabel>City</FormLabel>
            <Input
              type="text"
              placeholder="Enter City"
              name="city"
              value={detail.city}
              onChange={handleChange}
            />
          </FormControl>

          {/* Age Input */}
          <FormControl mt={4}>
            <FormLabel>Age</FormLabel>
            <Input
              type="number"
              placeholder="Enter Age"
              name="age"
              value={detail.age}
              onChange={handleChange}
            />
          </FormControl>

          {/* Job Input */}
          <FormControl mt={4}>
            <FormLabel>Job</FormLabel>
            <Input
              type="text"
              placeholder="Enter Job"
              name="job"
              value={detail.job}
              onChange={handleChange}
            />
          </FormControl>

          {/* Image URL Input */}
          <FormControl mt={4}>
            <FormLabel>Image</FormLabel>
            <Input
              type="text"
              placeholder="Enter Image URL"
              name="image"
              value={detail.image}
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

export default AddUser;


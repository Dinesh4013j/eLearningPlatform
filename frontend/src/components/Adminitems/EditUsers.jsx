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
import "./edit.css"; // Custom styling for the edit page
import AdminNavTop from "../AdminNavTop"; // Admin navigation bar
import { useDispatch, useSelector } from "react-redux"; // Redux hooks for dispatch and state
import { useNavigate, useParams } from "react-router-dom"; // React Router hooks for navigating and accessing params
import { patchUser } from "../../Redux/AdminReducer/action"; // Redux action for updating user data

const EditUser = () => {
  // Background image for the page
  const backgroundImageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5-K0r9nPZU1CVVkRP6H-MB2LZEc0pFHmZLA&usqp=CAU";

  // Getting the user ID from the URL parameters
  const { id } = useParams();
  
  // Dispatch function for sending actions to the store
  const dispatch = useDispatch();

  // Selecting user data from the Redux store
  const store = useSelector((store) => store.AdminReducer.users);

  // Filtering the user data to find the specific user to edit
  const existedUser = store.filter((el) => el._id == id);

  // React Router's navigate hook to redirect after successful update
  const navigate = useNavigate();

  // Object for the user details to initialize form state
  let obj = {
    name: existedUser[0].name,
    email: existedUser[0].email,
    password: existedUser[0].password,
    city: existedUser[0].city,
    age: existedUser[0].age,
  };

  // useState hook to manage the form data
  const [detail, setDetail] = useState(obj);

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value }; // Update specific field in state
    });
  };

  // Handle form submission to update the user data
  const handleSubmit = () => {
    dispatch(patchUser(id, detail)); // Dispatch the action to update the user
    alert("Data Updated Successfully"); // Show success message
    navigate("/admin/users"); // Navigate back to the users list page
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* Admin sidebar can be added here */}
      <Box mt="80px">
        <AdminNavTop /> {/* Admin top navigation */}

        {/* Page section with background image */}
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
            width: "100%",
            height: "300px", // Height for the background section
          }}
          color={"white"} // White text color
          fontWeight={"bold"}
        >
          {/* Form box with responsive width */}
          <Box width={["100%", "80%", "60%", "40%"]} p={4}>
            {/* Form control for Name */}
            <FormControl>
              <FormLabel>Name</FormLabel>
              <Input
                type="text"
                placeholder="Enter User's Name"
                name="name"
                border={"1px solid"}
                value={detail.name}
                onChange={handleChange} // Handle change for Name field
              />
            </FormControl>
            {/* Form control for Email */}
            <FormControl mt={4}>
              <FormLabel>Email</FormLabel>
              <Textarea
                type="email"
                border={"1px solid"}
                placeholder="Enter Email"
                name="email"
                value={detail.email}
                onChange={handleChange} // Handle change for Email field
              />
            </FormControl>
            {/* Form control for Password */}
            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input
                type="password"
                placeholder="Enter Password"
                name="password"
                border={"1px solid"}
                value={detail.password}
                onChange={handleChange} // Handle change for Password field
              />
            </FormControl>
            {/* Form control for City */}
            <FormControl mt={4}>
              <FormLabel>City</FormLabel>
              <Input
                type="text"
                placeholder="Enter City"
                name="city"
                border={"1px solid"}
                value={detail.city}
                onChange={handleChange} // Handle change for City field
              />
            </FormControl>
            {/* Form control for Age */}
            <FormControl mt={4}>
              <FormLabel>Age</FormLabel>
              <Input
                type="text"
                border={"1px solid"}
                name="age"
                value={detail.age}
                onChange={handleChange} // Handle change for Age field
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

export default EditUser;

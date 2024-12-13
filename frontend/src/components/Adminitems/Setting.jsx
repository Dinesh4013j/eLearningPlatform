import {
  Box,
  Button,
  Flex,
  FormLabel,
  Grid,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import React from "react";
import AdminNavTop from "../AdminNavTop";
import { useSelector } from "react-redux";
import { capitalizeFirstLetter } from "../../Redux/UserReducer/action";

// Setting component to display and manage user settings (Profile and Password)
const Setting = () => {
  // Retrieve data from Redux store
  const store = useSelector((store) => store.AdminReducer.data); // Admin data (not used in the current component)
  const userStore = useSelector((store) => store.UserReducer); // User profile data from the user reducer
  const name = capitalizeFirstLetter(userStore.name); // Capitalize the first letter of the user's name
  const password = "Hello_Password"; // Hardcoded password for demonstration purposes

  return (
    // Main container grid with 94% width and 99vh height
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* AdminNavTop is the top navigation bar */}
      <Box mt='80px'>
        <AdminNavTop />

        {/* Heading for the page */}
        <Heading>Setting</Heading>
        
        <Box mt={5}>
          {/* Profile Information section */}
          <Flex
            justify={"space-between"} // Layout: space between sections
            flexDirection={{ xl: "row", lg: "row", base: "column" }} // Responsive flex direction
            p={5} // Padding around the section
            gap={{ xl: 0, lg: 0, base: 10 }} // Gap between elements on smaller screens
          >
            <Box>
              <Heading size={13}>Profile Information</Heading>
              <Text>Update User Profile Information and Password</Text>
            </Box>
            
            {/* Profile information form */}
            <Box border={"1px solid gray"} borderRadius={10} w={"60%"} p={5}>
              <FormLabel>Name</FormLabel> {/* Label for the name field */}
              <Input placeholder="Enter Name" value={name} /> {/* Input field for name, prefilled with the capitalized name */}
              <Button mt={5} isDisabled={true}>Save</Button> {/* Disabled button for saving the profile */}
            </Box>
          </Flex>

          {/* Update Password section */}
          <Flex
            justify={"space-between"}
            flexDirection={{ xl: "row", lg: "row", base: "column" }}
            p={5}
            gap={{ xl: 0, lg: 0, base: 10 }}
          >
            <Box>
              <Heading size={13}>Update Password</Heading>
              <Text>
                Ensure your account is using a long, random password to <br /> 
                stay secure
              </Text>
            </Box>

            {/* Password update form */}
            <Box border={"1px solid gray"} borderRadius={10} w={"60%"} p={5}>
              <FormLabel>Current Password</FormLabel>
              <Input
                placeholder="Enter Current Password"
                type="password" // Password field for current password
                value={password} // Displaying the hardcoded password
              />
              <FormLabel>New Password</FormLabel>
              <Input placeholder="Enter New Password" /> {/* Input field for new password */}
              <FormLabel>Confirm Password</FormLabel>
              <Input placeholder="Enter Confirm Password" /> {/* Input field to confirm the new password */}
              <Button mt={5}>Save</Button> {/* Button to save the new password */}
            </Box>
          </Flex>
        </Box>
      </Box>
    </Grid>
  );
};

export default Setting; // Export the Setting component to be used in other parts of the app

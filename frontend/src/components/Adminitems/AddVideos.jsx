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
// Importing Redux hooks and action
import { useDispatch } from "react-redux";
import { addVideo } from "../../Redux/AdminReducer/action";
// Importing hooks for navigation and route parameters
import { useNavigate, useLocation } from "react-router-dom";

const AddVideo = () => {
  // Initialize Redux dispatch and navigate hook
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Use location hook to get the state passed via navigation
  const location = useLocation();
  const { id, title } = location.state; // Destructure id and title from the passed state

  // Initialize state for video details, with course ID and title preset
  let obj = {
    title: title, // Set video title based on the course title passed via state
    description: "",
    link: "",
    views: "",
    img: "",
    courseId: id, // Set courseId based on the course ID passed via state
  };

  const [detail, setDetail] = useState(obj); // Use useState to manage video details form

  // Handle change in form fields and update the state accordingly
  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetail((prev) => {
      return { ...prev, [name]: value }; // Update the specific field in the state
    });
  };

  // Handle form submission: dispatch addVideo action and navigate
  const handleSubmit = () => {
    dispatch(addVideo(detail, detail.courseId)); // Dispatch the action to add video
    alert("Video Added Successfully"); // Alert user that the video was added successfully
    navigate("/admin/videos"); // Navigate to the videos list page
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      {/* Admin navigation and layout container */}
      <Box mt="80px">
        <AdminNavTop /> {/* Admin navigation top bar */}

        {/* Form container with border and padding */}
        <Box border={"2px solid gray"} borderRadius={10} p={10} h="90%">
          {/* Video Title Input */}
          <FormControl>
            <FormLabel>Title</FormLabel>
            <Input
              type="text"
              placeholder="Enter Video Title"
              name="title"
              value={detail.title} // Display current title
              onChange={handleChange} // Update title on change
            />
          </FormControl>

          {/* Course ID Input (though it's already set from course state) */}
          <FormControl>
            <FormLabel>CourseID</FormLabel>
            <Input
              type="text"
              placeholder="Enter The Course Id to add video"
              name="courseId"
              value={detail.courseId} // Display course ID from passed state
              onChange={handleChange} // Update courseId if needed
            />
          </FormControl>

          {/* Description Textarea */}
          <FormControl mt={4}>
            <FormLabel>Description</FormLabel>
            <Textarea
              type="text"
              placeholder="Enter Description"
              name="description"
              value={detail.description} // Display current description
              onChange={handleChange} // Update description on change
            />
          </FormControl>

          {/* Video Link Input */}
          <FormControl mt={4}>
            <FormLabel>Link</FormLabel>
            <Input
              type="text"
              placeholder="Enter video Link"
              name="link"
              value={detail.link} // Display current link
              onChange={handleChange} // Update link on change
            />
          </FormControl>

          {/* Views Input */}
          <FormControl mt={4}>
            <FormLabel>Views</FormLabel>
            <Input
              type="number"
              placeholder="Enter Total Views"
              name="views"
              value={detail.views} // Display current view count
              onChange={handleChange} // Update views on change
            />
          </FormControl>

          {/* Thumbnail Input */}
          <FormControl mt={4}>
            <FormLabel>Thumbnail</FormLabel>
            <Input
              type="text"
              placeholder="Enter Video Thumbnail"
              name="img"
              value={detail.img} // Display current thumbnail URL
              onChange={handleChange} // Update image URL on change
            />
          </FormControl>

          {/* Submit Button to add the video */}
          <Button
            mt={4}
            colorScheme="red"
            size="md"
            isFullWidth
            onClick={handleSubmit} // Submit the form when clicked
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Grid>
  );
};

export default AddVideo;

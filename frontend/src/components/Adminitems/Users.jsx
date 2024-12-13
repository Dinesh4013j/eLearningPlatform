import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  IconButton,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import convertDateFormat, {
  deleteProduct,
  deleteUsers,
  getUser,
} from "../../Redux/AdminReducer/action";
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";

// Users component to display user details with sorting, searching, and pagination
const Users = () => {
  // Redux selectors to get user data and dispatch actions
  const store = useSelector((store) => store.AdminReducer.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // State variables for pagination, search, and sorting
  const [page, setPage] = useState(1); // Current page
  const [search, setSearch] = useState(""); // Search query
  const [order, setOrder] = useState(""); // Sorting order (ascending or descending)
  const limit = 4; // Number of users per page

  // Handle search input change
  const handleSearch = (e) => {
    setSearch(e.target.value); // Update the search state
  };

  // Handle sorting selection
  const handleSelect = (e) => {
    const { value } = e.target; // Get the selected value (asc or desc)
    setOrder(value); // Update the order state
  };

  // Fetch users on page change
  useEffect(() => {
    dispatch(getUser(page, limit)); // Dispatch the action to fetch users
  }, [page]); // Re-run this effect when the page changes

  // Handle user deletion
  const handleDelete = (id, name) => {
    dispatch(deleteUsers(id)); // Dispatch the delete action
    alert(`${name} is Deleted`); // Show confirmation alert
  };

  // Handle page change through pagination buttons
  const handlePageChange = (page) => {
    setPage(page); // Update the page state
  };

  // Handle previous and next page button clicks
  const handlePageButton = (val) => {
    setPage((prev) => prev + val); // Adjust the page state by +1 or -1
  };

  // Total number of pages (assuming 2 pages for simplicity in this example)
  const count = 2;

  return (
    // Main grid container for the Users page
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt="80px">
        {/* Admin navigation component */}
        <AdminNavTop handleSearch={handleSearch} />

        {/* User details section with sorting and create new user link */}
        <Box>
          <Grid
            templateColumns={{
              xl: "repeat(3,20% 60% 20%)", // Layout for larger screens (3 columns)
              lg: "repeat(3,20% 60% 20%)", // Layout for medium screens
              base: "repeat(1,1fr)", // Layout for mobile screens (1 column)
            }}
            gap={{ xl: 0, lg: 0, base: 7 }}
            m={3}
          >
            {/* Title for the section */}
            <Text fontWeight={"bold"}>User Details</Text>

            {/* Sort by age dropdown */}
            <Select w={"80%"} onChange={handleSelect}>
              <option value="asc">Age Sort in Ascending Order</option>
              <option value="desc">Age Sort in Descending Order</option>
            </Select>

            {/* Link to add a new user */}
            <Box fontWeight={"bold"}>
              <Link to="/admin/users/add">Create</Link>
            </Box>
          </Grid>

          {/* Table for displaying user information */}
          <Box
            w={{ xl: "100%", lg: "90%", md: "80%", base: "80%" }}
            maxWidth="100%"
            overflowX="auto"
          >
            <Table variant="striped" borderRadius="md" w="100%">
              <Thead>
                {/* Table header */}
                <Tr>
                  <Th>Name</Th>
                  <Th>Role</Th>
                  <Th>Email</Th>
                  <Th>City</Th>
                  <Th>Age</Th>
                  <Th>Subscribed Course</Th>
                </Tr>
              </Thead>
              {/* Display each user in the table */}
              {store?.length > 0 &&
                store?.map((el, i) => {
                  return (
                    <Tbody key={i}>
                      <Tr>
                        <Td>{el.name}</Td>
                        <Td>{el.role}</Td>
                        <Td>{el.email}</Td>
                        <Td>{el.city}</Td>
                        <Td>{el.age}</Td>
                        <Td>{el.course.length}</Td>
                        <Box>
                          {/* Delete and Edit buttons for each user */}
                          <Button onClick={() => handleDelete(el._id, el.name)}>
                            Delete
                          </Button>
                          <Link to={`/admin/users/edit/${el._id}`}>
                            <ButtonGroup size="sm" isAttached variant="outline">
                              <Button>Edit</Button>
                              <IconButton
                                aria-label="Add to friends"
                                icon={<EditIcon />}
                              />
                            </ButtonGroup>
                          </Link>
                        </Box>
                      </Tr>
                    </Tbody>
                  );
                })}
            </Table>
          </Box>

          {/* Pagination controls */}
          <Box textAlign={{ xl: "right", lg: "right", base: "left" }}>
            <Button disabled={page <= 1} onClick={() => handlePageButton(-1)}>
              Prev
            </Button>
            <Pagination
              totalCount={count} // Total pages
              current_page={page} // Current page number
              handlePageChange={handlePageChange} // Page change handler
            />
            <Button
              disabled={page >= count}
              onClick={() => handlePageButton(1)}
            >
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Users; // Export the Users component

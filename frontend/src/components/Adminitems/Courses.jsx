import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  IconButton,
  Select,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { AddIcon, EditIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import convertDateFormat, {
  deleteProduct,
  getProduct,
} from "../../Redux/AdminReducer/action";
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";

const Courses = () => {
  const store = useSelector((store) => store.AdminReducer.data); // Fetch the courses from Redux store
  const dispatch = useDispatch(); // Initialize Redux dispatch
  const [page, setPage] = useState(1); // Current page number
  const [search, setSearch] = useState(""); // Search query
  const [order, setOrder] = useState(""); // Order sorting (asc/desc)
  const limit = 4; // Number of courses per page

  // Responsive table and grid sizes
  const tableSize = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });
  const courseSize = useBreakpointValue({ base: "md", sm: "lg", md: "xl" });

  // Handle search input changes
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  // Handle sorting order selection
  const handleSelect = (e) => {
    const { value } = e.target;
    setOrder(value);
  };

  // Fetch products whenever page, search, order, or limit changes
  useEffect(() => {
    dispatch(getProduct(page, limit, search, order));
  }, [page, search, order, limit]);

  // Handle deletion of a course
  const handleDelete = (id, title) => {
    dispatch(deleteProduct(id)); // Dispatch action to delete the course
    alert(`${title} is Deleted`);
  };

  // Handle page changes
  const handlePageChange = (page) => {
    setPage(page);
  };

  // Handle previous/next page buttons
  const handlePageButton = (val) => {
    setPage((prev) => prev + val);
  };

  const count = 4; // Total number of pages (hardcoded for example)

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt="90px">
        {/* Admin top navigation with a search bar */}
        <AdminNavTop handleSearch={handleSearch} />

        {/* Main Courses section */}
        <Box className={`course ${courseSize}`}>
          {/* Sorting and Add Course link */}
          <Grid
            templateColumns={{
              xl: "repeat(3,20% 60% 20%)",
              lg: "repeat(3,20% 60% 20%)",
              base: "repeat(1,1fr)",
            }}
            gap={{ xl: 0, lg: 0, base: 7 }}
          >
            <Text fontWeight={"bold"}>Welcome To Course</Text>
            <Select w={"80%"} onChange={handleSelect}>
              <option value="asc">Price Sort in Ascending Order</option>
              <option value="desc">Price Sort in Descending Order</option>
            </Select>
            <Box fontWeight={"bold"}>
              <Link to="/admin/addCourse">Create</Link>
            </Box>
          </Grid>

          {/* Courses Table */}
          <Box
            w={{ xl: "100%", lg: "90%", md: "80%", base: "80%" }}
            overflowX="auto"
          >
            <Table
              variant="striped"
              borderRadius="md"
              w="100%"
              size={tableSize}
            >
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Date</Th>
                  <Th>Category</Th>
                  <Th>Description</Th>
                  <Th>Price</Th>
                  <Th>Teacher</Th>
                </Tr>
              </Thead>
              {store?.length > 0 &&
                store?.map((el, i) => {
                  return (
                    <Tbody key={i}>
                      <Tr>
                        <Td>{el.title}</Td>
                        <Td>{convertDateFormat(el.createdAt)}</Td>
                        <Td>{el.category}</Td>
                        <Td>{el.description}</Td>
                        <Td>{el.price}</Td>
                        <Td>{el.teacher}</Td>
                        <Box>
                          {/* Delete Button */}
                          <Button
                            onClick={() => handleDelete(el._id, el.title)}
                          >
                            Delete
                          </Button>

                          {/* Edit Button */}
                          <Link to={`/admin/edit/${el._id}`}>
                            <ButtonGroup size="sm" isAttached variant="outline">
                              <Button>Edit</Button>
                              <IconButton
                                aria-label="Edit"
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

          {/* Pagination Section */}
          <Box textAlign={{ xl: "right", lg: "right", base: "left" }}>
            <Button disabled={page <= 1} onClick={() => handlePageButton(-1)}>
              Prev
            </Button>
            <Pagination
              totalCount={count}
              current_page={page}
              handlePageChange={handlePageChange}
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

export default Courses;


import React, { useEffect, useState } from "react";
// Importing Chakra UI components
import { 
  Box, Button, Grid, Select, Text, useBreakpointValue, 
  Table, Thead, Tbody, Tr, Th, Td 
} from "@chakra-ui/react";
// Importing React Router for navigation
import { Link, useNavigate } from "react-router-dom";
// Importing Redux hooks and actions
import { useDispatch, useSelector } from "react-redux";
import { getProduct, convertDateFormat } from "../../Redux/AdminReducer/action";
// Custom components
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";

const Add = () => {
  // Redux store state
  const store = useSelector((store) => store.AdminReducer.data);
  const dispatch = useDispatch();

  // State variables
  const [page, setPage] = useState(1); // Current page for pagination
  const [search, setSearch] = useState(""); // Search query
  const [order, setOrder] = useState(""); // Sorting order
  const limit = 4; // Limit for items per page

  // Breakpoint-dependent styles
  const tableSize = useBreakpointValue({ base: "sm", sm: "md", md: "lg" });
  const courseSize = useBreakpointValue({ base: "md", sm: "lg", md: "xl" });

  // Router navigation
  const navigate = useNavigate();

  // Pagination limit for the page
  const count = 4;

  // Handles search input change
  const handleSearch = (e) => setSearch(e.target.value);

  // Handles selection of sorting order
  const handleSelect = (e) => setOrder(e.target.value);

  // Handles next/previous page button click
  const handlePageButton = (val) => setPage((prev) => prev + val);

  // Handles page number change
  const handlePageChange = (page) => setPage(page);

  // Navigates to add videos page
  const handleVideos = (id, title) => {
    navigate(`/admin/videos/add/${id}`, { state: { id, title } });
  };

  // Fetch data whenever page, search, or order changes
  useEffect(() => {
    dispatch(getProduct(page, limit, search, order));
  }, [page, search, order, limit]);

  return (
    <Grid className="Nav" h="99vh" w="94%" gap={10}>
      {/* Admin Top Navigation */}
      <Box mt="90px">
        <AdminNavTop handleSearch={handleSearch} />
        
        {/* Course Section */}
        <Box className={`course ${courseSize}`}>
          {/* Header and Controls */}
          <Grid
            templateColumns={{
              xl: "repeat(3,20% 60% 20%)",
              lg: "repeat(3,20% 60% 20%)",
              base: "repeat(1,1fr)",
            }}
            gap={{ xl: 0, lg: 0, base: 7 }}
          >
            <Text fontWeight="bold">Welcome To Course</Text>
            <Select w="80%" onChange={handleSelect}>
              <option value="asc">Price Sort in Ascending Order</option>
              <option value="desc">Price Sort in Descending Order</option>
            </Select>
            <Box fontWeight="bold">
              <Link to="/admin/addCourse">Create</Link>
            </Box>
          </Grid>
          
          {/* Course Table */}
          <Box
            w={{ xl: "100%", lg: "90%", md: "80%", base: "80%" }}
            overflowX="auto"
          >
            <Table variant="striped" borderRadius="md" w="100%" size={tableSize}>
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
                store?.map((el, i) => (
                  <Tbody key={i}>
                    <Tr>
                      <Td>{el.title}</Td>
                      <Td>{convertDateFormat(el.createdAt)}</Td>
                      <Td>{el.category}</Td>
                      <Td>{el.description}</Td>
                      <Td>{el.price}</Td>
                      <Td>{el.teacher}</Td>
                      <Box>
                        <Button onClick={() => handleVideos(el._id, el.title)}>
                          Add Videos
                        </Button>
                      </Box>
                    </Tr>
                  </Tbody>
                ))}
            </Table>
          </Box>
          
          {/* Pagination */}
          <Box textAlign={{ xl: "right", lg: "right", base: "left" }}>
            <Button disabled={page <= 1} onClick={() => handlePageButton(-1)}>
              Prev
            </Button>
            <Pagination
              totalCount={count}
              current_page={page}
              handlePageChange={handlePageChange}
            />
            <Button disabled={page >= count} onClick={() => handlePageButton(1)}>
              Next
            </Button>
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};

export default Add;


import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Grid,
  IconButton,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";
import { useDispatch, useSelector } from "react-redux";
import convertDateFormat, {
  deleteProduct,
  getvideo,
} from "../../Redux/AdminReducer/action";
import Pagination from "./Pagination";
import AdminNavTop from "../AdminNavTop";

const GetVideos = () => {
  const store = useSelector((store) => store.AdminReducer.videos); // Fetch videos from Redux store
  const dispatch = useDispatch(); // Access to Redux dispatch
  const navigate = useNavigate(); // Access to navigation functions
  const [page, setPage] = useState(1); // State for current page
  const limit = 4; // Limit of items per page

  const user = JSON.parse(localStorage.getItem('user')); // Get user info from localStorage

  // Fetch videos when page or limit changes
  useEffect(() => {
    dispatch(getvideo(page, limit, user));
  }, [page, limit, dispatch, user]);

  // Handle video deletion
  const handleDelete = (id, title) => {
    dispatch(deleteProduct(id)); // Dispatch the delete action
    alert(`${title} is Deleted`); // Notify user
  };

  // Handle page change via pagination component
  const handlePageChange = (page) => {
    setPage(page); // Set the current page
  };

  const count = Math.ceil(store.length / limit); // Calculate total page count based on store length

  // Handle "Prev" and "Next" page navigation
  const handlePageButton = (val) => {
    setPage((prev) => prev + val);
  };

  return (
    <Grid className="Nav" h={"99vh"} w="94%" gap={10}>
      <Box mt="80px">
        <AdminNavTop /> {/* Admin navigation bar */}

        <Box>
          <Text fontWeight={"bold"} m={5}>
            Courses Video
          </Text>

          <Box maxWidth="100%" overflowX="auto">
            <Table variant="striped" borderRadius="md" w="100%">
              <Thead>
                <Tr>
                  <Th>Title</Th>
                  <Th>Uploaded</Th>
                  <Th>Description</Th>
                  <Th>Views</Th>
                  <Th>Link</Th>
                </Tr>
              </Thead>
              {store.length > 0 &&
                store.map((el, i) => {
                  return (
                    <Tbody key={i}>
                      <Tr>
                        <Td>{el.title}</Td>
                        <Td>{convertDateFormat(el.createdAt)}</Td>
                        <Td>{el.description}</Td>
                        <Td>{el.views}</Td>
                        <Td>{el.link}</Td>
                        <Box>
                          <Link to={`/admin/videos/add/${el.courseId}`}>
                            <ButtonGroup size="sm" isAttached variant="outline">
                              <Button>Add</Button>
                              <IconButton
                                aria-label="Add to friends"
                                icon={<AddIcon />}
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

export default GetVideos;

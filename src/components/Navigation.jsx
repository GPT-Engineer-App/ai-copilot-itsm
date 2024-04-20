import { Box, Button, Flex } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex bg="gray.100" p={4} justifyContent="space-between">
      <Box p="2">
        <Link to="/"><Button colorScheme="teal">Home</Button></Link>
      </Box>
      <Box p="2">
        <Link to="/dashboard"><Button colorScheme="teal">Dashboard</Button></Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
import { Box, Button, VStack, Divider, Center, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <Box bg="gray.100" p={4} width="250px" height="100vh" position="fixed">
      <VStack spacing={4} align="stretch">
        <Center>
          <Text fontSize="2xl" p="4">
            Logo
          </Text>
        </Center>
        <Divider orientation="horizontal" />
        <Link to="/">
          <Button colorScheme="teal" justifyContent="flex-start">
            Home
          </Button>
        </Link>
        <Link to="/dashboard">
          <Button colorScheme="teal" justifyContent="flex-start">
            Dashboard
          </Button>
        </Link>
        <Link to="/assets">
          <Button colorScheme="teal" justifyContent="flex-start">
            Assets
          </Button>
        </Link>
        <Link to="/incidents">
          <Button colorScheme="teal" justifyContent="flex-start">
            Incidents
          </Button>
        </Link>
        <Divider orientation="horizontal" />
        <Box p="4">
          <Text fontSize="md">Account</Text>
        </Box>
      </VStack>
    </Box>
  );
};

export default Navigation;

import { Box, Container, Heading, Text, VStack } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          Dashboard
        </Heading>
        <Text fontSize="xl">View your IT tickets and their statuses here.</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Text>
            Here you can see all the tickets you've submitted, track their progress, and manage them.
          </Text>
        </Box>
      </VStack>
    </Container>
  );
};

export default Dashboard;
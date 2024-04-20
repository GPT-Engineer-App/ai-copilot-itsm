import { Box, Button, Container, Heading, Input, Stack, Text, useToast, VStack } from "@chakra-ui/react";
import { FaRobot, FaSearch, FaTicketAlt } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleTicketSubmission = () => {
    toast({
      title: "Ticket Submitted",
      description: "Your ticket has been submitted successfully. Our AI copilot will handle it shortly.",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Container maxW="container.xl" p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="2xl" textAlign="center">
          ITSM AI Copilot
        </Heading>
        <Text fontSize="xl">Welcome to the IT Service Management (ITSM) application with an AI copilot. Submit your IT issues and get assistance instantly!</Text>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Stack spacing={4}>
            <Heading as="h3" size="lg">
              Submit a Ticket
            </Heading>
            <Input placeholder="Describe your issue" />
            <Button leftIcon={<FaTicketAlt />} colorScheme="blue" onClick={handleTicketSubmission}>
              Submit Ticket
            </Button>
          </Stack>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px" borderRadius="md">
          <Stack spacing={4}>
            <Heading as="h3" size="lg">
              Search Knowledge Base
            </Heading>
            <Input placeholder="Search for solutions..." />
            <Button leftIcon={<FaSearch />} colorScheme="teal">
              Search
            </Button>
          </Stack>
        </Box>
        <Button rightIcon={<FaRobot />} colorScheme="purple" variant="solid">
          Talk to AI Copilot
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;

import React from "react";
import { Box, Heading, Text, VStack } from "@chakra-ui/react";

function AssetManagement() {
  return (
    <Box p={5}>
      <VStack spacing={5}>
        <Heading as="h1" size="2xl">
          Asset Management Module
        </Heading>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Inventory Management
          </Heading>
          <Text>Provides a detailed inventory of all IT assets, including hardware and software, and helps in identifying and optimizing redundant assets.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Lifecycle Management
          </Heading>
          <Text>Manages the entire lifecycle of an asset from planning, procurement, deployment, maintenance, to retirement.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Financial Management
          </Heading>
          <Text>Tracks financial data such as purchase dates, costs, and vendor information to understand the total cost of ownership.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Contractual Management
          </Heading>
          <Text>Manages contracts, warranties, licenses, and service-level agreements (SLAs) associated with IT assets.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Maintenance Tracking
          </Heading>
          <Text>Logs all maintenance activities performed on an IT asset to assess performance and plan for repairs, upgrades, or replacements.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Compliance and Licensing
          </Heading>
          <Text>Ensures compliance with legal policies and manages software licenses to avoid over- or under-licensing issues.</Text>
        </Box>
        <Box p={4} shadow="md" borderWidth="1px" borderRadius="md">
          <Heading as="h2" size="lg">
            Reporting and Analytics
          </Heading>
          <Text>Offers built-in reports and customized reporting capabilities to make informed decisions based on asset data.</Text>
        </Box>
      </VStack>
    </Box>
  );
}

export default AssetManagement;

import React, { useState } from "react";
import { Box, Button, FormControl, FormLabel, Input, Select, Text, VStack } from "@chakra-ui/react";

function IncidentManagement() {
  const [incidents, setIncidents] = useState([]);
  const [incidentDetails, setIncidentDetails] = useState("");
  const [category, setCategory] = useState("");
  const [urgency, setUrgency] = useState("");
  const [impact, setImpact] = useState("");
  const [status, setStatus] = useState("New");

  const handleIncidentSubmission = () => {
    const newIncident = {
      id: incidents.length + 1,
      details: incidentDetails,
      category,
      urgency,
      impact,
      status,
    };
    setIncidents([...incidents, newIncident]);
    setIncidentDetails("");
    setCategory("");
    setUrgency("");
    setImpact("");
    setStatus("New");
  };

  return (
    <Box p="4">
      <VStack spacing={4}>
        <Text fontSize="xl">Incident Management</Text>
        <FormControl>
          <FormLabel>Incident Details</FormLabel>
          <Input value={incidentDetails} onChange={(e) => setIncidentDetails(e.target.value)} placeholder="Describe the incident" />
          <FormLabel>Category</FormLabel>
          <Select placeholder="Select category" value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value="Hardware">Hardware</option>
            <option value="Software">Software</option>
            <option value="Network">Network</option>
            <option value="Other">Other</option>
          </Select>
          <FormLabel>Urgency</FormLabel>
          <Select placeholder="Select urgency" value={urgency} onChange={(e) => setUrgency(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <FormLabel>Impact</FormLabel>
          <Select placeholder="Select impact" value={impact} onChange={(e) => setImpact(e.target.value)}>
            <option value="Low">Low</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </Select>
          <Button mt={4} colorScheme="blue" onClick={handleIncidentSubmission}>
            Log Incident
          </Button>
        </FormControl>
        {incidents.map((incident) => (
          <Box key={incident.id} p={4} shadow="md" borderWidth="1px">
            <Text>ID: {incident.id}</Text>
            <Text>Details: {incident.details}</Text>
            <Text>Category: {incident.category}</Text>
            <Text>Urgency: {incident.urgency}</Text>
            <Text>Impact: {incident.impact}</Text>
            <Text>Status: {incident.status}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default IncidentManagement;

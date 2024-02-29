import React, { useState } from "react";
import { Box, Button, VStack, Text, Divider, Heading, Center, Image } from "@chakra-ui/react";
import { FaGlobeAsia } from "react-icons/fa";

// Mock data for past earthquakes
const pastEarthquakes = [
  { id: 1, magnitude: 4.5, date: "2021-05-03" },
  { id: 2, magnitude: 5.2, date: "2021-07-22" },
  { id: 3, magnitude: 6.1, date: "2021-09-10" },
];

// Mock function to simulate earthquake prediction
const predictFutureEarthquakes = () => {
  return [
    { id: 4, magnitude: 5.8, date: "2023-12-05" },
    { id: 5, magnitude: 4.6, date: "2024-01-18" },
    { id: 6, magnitude: 7.3, date: "2024-04-30" },
  ];
};

const Index = () => {
  const [futureEarthquakes, setFutureEarthquakes] = useState([]);

  // Simulate fetching and predicting earthquakes
  const handlePredictClick = () => {
    const predictions = predictFutureEarthquakes();
    setFutureEarthquakes(predictions);
  };

  return (
    <VStack spacing={4} p={5}>
      <Heading>Earthquake Prediction Map</Heading>
      <Divider />
      <Box p={4} borderWidth="1px" borderRadius="lg">
        <Center>
          <Image src="https://images.unsplash.com/photo-1524661135-423995f22d0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcHxlbnwwfHx8fDE3MDkxODE0OTN8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="World Map" boxSize="300px" />
        </Center>
        <Text mt={4}>The map above is a placeholder where the earthquakes would be displayed.</Text>
      </Box>
      <Button leftIcon={<FaGlobeAsia />} colorScheme="teal" onClick={handlePredictClick}>
        Predict Future Earthquakes
      </Button>
      <Divider />
      <Box w="full">
        <Heading size="md">Past Earthquakes</Heading>
        {pastEarthquakes.map((eq) => (
          <Text key={eq.id}>
            Magnitude: {eq.magnitude}, Date: {eq.date}
          </Text>
        ))}
      </Box>
      <Box w="full">
        <Heading size="md">Predicted Future Earthquakes</Heading>
        {futureEarthquakes.length === 0 ? (
          <Text>No predictions made yet.</Text>
        ) : (
          futureEarthquakes.map((eq) => (
            <Text key={eq.id}>
              Magnitude: {eq.magnitude}, Date: {eq.date}
            </Text>
          ))
        )}
      </Box>
    </VStack>
  );
};

export default Index;

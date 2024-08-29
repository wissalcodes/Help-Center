"use client";

import { Container, Heading } from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
} from "@chakra-ui/react";
import "../styles/helpcenter.css";

function Welcoming() {
  return (
    <div className="w-full  min-h-screen p-[40px]">
      <Box className="BigTitle" mb="20px">
        <Text>Votre Assistance, Notre Priority.</Text>
      </Box>
      <Heading size="lg" mb="40px" mt="50px">
        Questions fréquentes
      </Heading>
      <Accordion allowMultiple allowToggle>
        {[
          "Question 1",
          "Question 2",
          "Question 3",
          "Question 4",
          "Question 5",
        ].map((question, index) => (
          <AccordionItem key={index} className="AccordionItem">
            <h2>
              <AccordionButton className="accordion-header" p={4}>
                <Box as="span" flex="1" textAlign="left">
                  <Text>{question}</Text>
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4} fontSize="md" className="accordion-panel">
              <Text>inside</Text>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export default Welcoming;

import React from 'react';
import { Box,Container, Heading, Text, FormControl, FormLabel, Input, Textarea, Button } from '@chakra-ui/react';

const ContactUs = () => {
  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // handle form submission logic here
  };

  return (
    <Container maxW="container.xl">
    <Box p={6} my={12}>
      <Heading as="h1" size="lg" mb={4}>Contact Us</Heading>
      <Text mb={6}>Please fill out the form below and we{"'"}ll get back to you as soon as possible.</Text>
      <Box as="form" onSubmit={handleSubmit}>
        <FormControl id="name" isRequired mb={4}>
          <FormLabel>Name</FormLabel>
          <Input placeholder="Your name" />
        </FormControl>
        <FormControl id="email" isRequired mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input type="email" placeholder="Your email address" />
        </FormControl>
        <FormControl id="subject" isRequired mb={4}>
            <FormLabel>Subject</FormLabel>
            <Input placeholder="Subject" />
        </FormControl>
        <FormControl id="attachment" mb={4}>
            <FormLabel>Attachment</FormLabel>
            <Input type="file" />
        </FormControl>
        <FormControl id="message" isRequired mb={6}>
          <FormLabel>Message</FormLabel>
          <Textarea placeholder="Type your message here" />
        </FormControl>
        <Button type="submit" size={'lg'} colorScheme="blue">Send</Button>
      </Box>
    </Box>
    </Container>
  );
};

export default ContactUs;

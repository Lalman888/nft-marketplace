import { Box, Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Box bg="gray.200" py={8}>
      <Flex justify="center" align="center">
        <Link href="/about">
          <Text fontSize="lg" fontWeight="bold" mr={4}>
            About Us
          </Text>
        </Link>
        <Link href="/contact">
          <Text fontSize="lg" fontWeight="bold" mr={4}>
            Contact Us
          </Text>
        </Link>
        <Link href="/privacy">
          <Text fontSize="lg" fontWeight="bold">
            Privacy Policy
          </Text>
        </Link>
      </Flex>
      <Box mt={8}>
        <Text fontSize="lg" fontWeight="bold" textAlign="center">
          © 2023 NFT Marketplace. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;

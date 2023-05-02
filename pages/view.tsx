import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
import Link from 'next/link';

const HomePage: NextPage = () => {
  return (
    <Box bg="gray.50">
      <Head>
        <title>My NFT Marketplace</title>
        <meta name="description" content="My NFT Marketplace" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box bg="white" py={16}>
        <Container maxW="container.xl">
          <Flex flexDirection={['column', 'column', 'row']} alignItems="center" justifyContent="space-between">
            <Box flex="1" mb={[8, 8, 0]} pr={[0, 0, 16]}>
              <Heading size="2xl" mb={8}>
                Buy, sell and discover unique NFTs
              </Heading>
              <Text fontSize="xl" mb={8}>
                My NFT Marketplace is the premier platform for buying, selling, and discovering unique NFTs. From art and music to sports and gaming, there{"'"}s something for everyone on our marketplace.
              </Text>
              <Link
                href="/buy"
                passHref
              >
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="lg">
                Shop Now
              </Button>
              </Link>
            </Box>
            <Box flex="1" textAlign="center">
              <Image src="/hero.png" alt="Landing Page Image" />
            </Box>
          </Flex>
        </Container>
      </Box>

      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <Heading size="xl" mb={8}>
            Featured NFTs
          </Heading>
          <SimpleGrid columns={[1, 2, 3]} spacing={8}>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
              <Image src="/8.png" height={300} width={'100%'} alt="NFT 1" />
              <Box p={4}>
                <Heading size="md" mb={2}>
                  NFT Title
                </Heading>
                <Text fontSize="sm" mb={4}>
                  By Artist Name
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
                  View Details
                </Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
              <Image src="/12.png" height={300} width={'100%'} alt="NFT 1" />
              <Box p={4}>
                <Heading size="md" mb={2}>
                  NFT Title
                </Heading>
                <Text fontSize="sm" mb={4}>
                  By Artist Name
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
                  View Details
                </Button>
              </Box>
            </Box>
            <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
              <Image src="/22.png" height={300} width={'100%'} alt="NFT 1" />
              <Box p={4}>
                <Heading size="md" mb={2}>
                  NFT Title
                </Heading>
                <Text fontSize="sm" mb={4}>
                  By Artist Name
                </Text>
                <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
                  View Details
                </Button>
              </Box>
            </Box>
            
        
      </SimpleGrid>
    </Container>
  </Box>

  <Box bg="white" py={16}>
    <Container maxW="container.xl">
      <Heading size="xl" mb={8}>
        How it Works
      </Heading>
      <SimpleGrid columns={[1, 2, 3]} spacing={8}>

      <Box>
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
    <Box p={8}>
      <Heading size="lg" mb={4}>
        Create an NFT
      </Heading>
      <Text fontSize="xl" mb={4}>
        Sign up and create a new NFT with our<br/> easy-to-use creator tool.
      </Text>
    </Box>
  </Box>
</Box>
<Box>
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
    <Box p={8}>
      <Heading size="lg" mb={4}>
        List Your NFT
      </Heading>
      <Text fontSize="xl" mb={4}>
        Once you{"'"}ve created your NFT, list it for sale on our marketplace.
      </Text>
    </Box>
  </Box>
</Box>
<Box>
  <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
    <Box p={8}>
      <Heading size="lg" mb={4}>
        Sell Your NFT
      </Heading>
      <Text fontSize="xl" mb={4}>
        When someone buys your NFT, you{"'"}ll receive payment directly to your connected wallet.
      </Text>
    </Box>
  </Box>
</Box>
  
      
      </SimpleGrid>
    </Container>
  </Box>

  <Box bg="gray.50" py={16}>
    <Container maxW="container.xl">
      <Heading size="xl" mb={8}>
        Get in Touch
      </Heading>
      <SimpleGrid columns={[1, 2, 2]} spacing={8}>
        <Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
            <Image src="/mail.png" pl='2' width={100} height={100} alt="Email" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                Email Us
              </Heading>
              <Text fontSize="sm" mb={4}>
                Send us an email and we ll get back to you as soon as possible.
              </Text>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
                Email Us
              </Button>
            </Box>
            </Box>
        </Box>
        <Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
            <Image src="/twitter.png" width={100} height={100} pl='2' alt="Twitter" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                Follow Us on Twitter
              </Heading>
              <Text fontSize="sm" mb={4}>
                Stay updated with our latest news and announcements by following us on Twitter.
              </Text>
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
                Follow Us
              </Button>
            </Box>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  </Box>
  </Box>

);
};

export default HomePage;
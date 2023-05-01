import type { NextPage } from 'next'
import Head from 'next/head'
import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'

const Home: NextPage = () => {
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
              <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="lg">
                Start Exploring
              </Button>
            </Box>
            <Box flex="1" textAlign="center">
              <Image src="/landing-page.png" alt="Landing Page Image" />
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
              <Image src="/nft1.png" alt="NFT 1" />
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
              <Image src="/nft2.png" alt="NFT 2" />
              <Box p={4}>
                <Heading size="md" mb={2}>
                  NFT Title
                </Heading>
                <Text fontSize="sm" mb={4}>
                  By Artist Name
                </Text>
                </Box>
          <Button rightIcon={<ArrowForwardIcon />} colorScheme="blue" size="sm">
            View Details
          </Button>
        </Box>
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
          <Image src="/nft3.png" alt="NFT 3" />
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
            <Image src="/create-nft.png" alt="Create NFT" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                Create an NFT
              </Heading>
              <Text fontSize="sm" mb={4}>
                Sign up and create a new NFT with our easy-to-use creator tool.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
            <Image src="/list-nft.png" alt="List NFT" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                List Your NFT
              </Heading>
              <Text fontSize="sm" mb={4}>
                Once you ve created your NFT, list it for sale on our marketplace.
              </Text>
            </Box>
          </Box>
        </Box>
        <Box>
          <Box borderWidth="1px" borderRadius="lg" overflow="hidden" shadow="md">
            <Image src="/sell-nft.png" alt="Sell NFT" />
            <Box p={4}>
              <Heading size="md" mb={2}>
                Sell Your NFT
              </Heading>
              <Text fontSize="sm" mb={4}>
                When someone buys your NFT, you ll receive payment directly to your connected wallet.
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
            <Image src="/email.png" alt="Email" />
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
            <Image src="/twitter.png" alt="Twitter" />
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

export default Home;
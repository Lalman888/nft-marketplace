import { Box, Container, Image, Link, Heading, Text } from "@chakra-ui/react";

const AboutPage = () => {
  return (
    <>
      <Container maxW="container.xl">
        <Box p={6}>
          <Heading textAlign={"center"} mb={6}>About Us</Heading>
          <Box
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            shadow="md"
            mb={8}
          >
            <Image src="/about.png" alt="About Us" />
          </Box>
          <Text fontSize="xl" mb={6}>
            Our NFT marketplace is dedicated to providing a platform for artists
            and collectors to showcase and trade unique digital assets. We
            believe that NFTs represent the future of digital ownership and we
            {"'"}re excited to be at the forefront of this new movement.
          </Text>
          <Text fontSize="xl" mb={6}>
            Our team is comprised of individuals from diverse backgrounds,
            including technology, finance, and the arts. We{"'"}re passionate
            about creating a community-driven platform that empowers creators
            and collectors alike. Our mission is to make NFTs accessible to
            everyone and to promote innovation and creativity in the digital art
            world.
          </Text>
          <Text fontSize="xl" mb={8}>
            If you have any questions or feedback, please don{"'"}t hesitate to
            contact us at{" "}
            <Link href="mailto:support@nftmarketplace.com">
              support@nftmarketplace.com
            </Link>
            . Thank you for choosing our marketplace to buy, sell, and trade
            NFTs!
          </Text>
        </Box>
      </Container>
    </>
  );
};

export default AboutPage;

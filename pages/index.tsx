import NextLink from 'next/link'
import type { NextPage } from "next";
import { Button, Container, Flex, Heading, Image, Stack } from '@chakra-ui/react';
import HomePage from './view';
import Chat from '../components/Chat';

const Home: NextPage = () => {
  return (
    
    <>
    {/* // <Container maxW={"1200px"}>
    //   <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"}>
    //     <Stack spacing={4} align={"center"}>
    //       <Heading>Marketplace</Heading>
    //       <Button
    //          as={NextLink} href='/buy'
    //       >Shop NFTs</Button>
    //     </Stack>
    //   </Flex>
    // </Container> */}
    <HomePage/>
    <Chat/>
    </>
  );
};

export default Home;

import React from "react";
import { Container, Heading, Text } from "@chakra-ui/react";
import NFTGrid from "../components/NFTGrid";
import { NFT_COLLECTION_ADDRESS } from "../const/addresses";
import { useContract, useNFTs } from "@thirdweb-dev/react";

export default function Buy() {
    const { contract } = useContract(NFT_COLLECTION_ADDRESS);
    const { data, isLoading } = useNFTs(contract);
    // console.log('buy ',data);
    const steps = [
        {
          id: '1',
          message: 'Hello! How can I help you?',
          trigger: '2',
        },
        {
          id: '2',
          user: true,
          trigger: '3',
        },
        {
          id: '3',
          message: 'I am sorry, I do not understand. Can you please rephrase?',
          trigger: '2',
        },
      ];
    return (
        <Container maxW={"1200px"} p={5}>
            <Heading>Buy NFTs</Heading>
            <Text>Browse and buy NFTs from this collection.</Text>
            <NFTGrid 
                isLoading={isLoading} 
                data={data} 
                emptyText={"No NFTs found"}
            />
            {/* <ChatbotP step={steps}/> */}
        </Container>
    )
};
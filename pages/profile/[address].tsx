/* eslint-disable */ 
import { Container, Heading, Text } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import {
  // useContract,
  useNFTs,
  ThirdwebNftMedia,
  Web3Button,
} from "@thirdweb-dev/react";
import React, { ChangeEvent,useEffect } from "react";
import {
  MARKETPLACE_ADDRESS,
  NFT_COLLECTION_ADDRESS,
} from "../../const/addresses";
import { useRouter } from "next/router";
import NFTGrid from "../../components/NFTGrid";
import Profile from "../../components/Profile";
import Head from "next/head";
import { useState } from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  VStack,
  HStack,
  IconButton,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";
interface Trait {
  name: string;
  value: string;
}
type Props = {
  apiEndpoint: string;
};

type FormData = {
  name: string;
  description: string;
  image: File;
  traits: string[];
};

export default function ProfilePage({ apiEndpoint }: Props) {
  const router = useRouter();
  // const addlocal = localStorage.getItem("collectionAddress");
  const { contract: nftCollection } = useContract( NFT_COLLECTION_ADDRESS);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [images, setImage] = useState<string>("");
  const [imagefile, setImageFile] = useState<File>();
  // console.log('nft data ',name, description, imagefile)
  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );
    // console.log(ownedNfts);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    setImageFile(file);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };


  const handleClick = () => {
    const inputElement = document.getElementById(
      "image-upload"
    ) as HTMLInputElement | null;
    if (inputElement) {
      inputElement.click();
    }
  };



  return (
    <>
      <Head>
        <title>Profile</title>
      </Head>
      <Container maxW={"1200px"} p={5}>
        <div style={{ paddingTop: "1rem", paddingBottom: "1rem" }}>
          {/* <Profile/> */}

          <Button onClick={onOpen}>Create NFT</Button>
          <Modal isOpen={isOpen} onClose={onClose} size={"4xl"}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader display={"flex"} justifyContent={"space-between"}>
                <Heading size={"md"}>Create NFT</Heading>
                <IconButton
                  aria-label="Close modal"
                  icon={<CloseIcon />}
                  onClick={onClose}
                />
              </ModalHeader>
              <ModalBody>
                <FormControl mb={4}>
                  <FormLabel>Name</FormLabel>
                  <Input
                    placeholder="Enter name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Description</FormLabel>
                  <Textarea
                    placeholder="Enter description"
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  />
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel>Image</FormLabel>
                  {images ? (
                    <Image
                      src={images}
                      alt="NFT Image"
                      width={200}
                      height={200}
                      mb={4}
                    />
                  ) : (
                    <Button mb={4} leftIcon={<AddIcon />} onClick={handleClick}>
                      Upload Image
                    </Button>
                  )}
                  <Input
                    id="image-upload"
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={handleImageUpload}
                  />
                </FormControl>
                <FormControl mb={4} alignItems={"center"}>
                  {/* <Button colorScheme="gray" px={12} 
                    // onClick={handleSubmit}
                    >
                        Create NFT
                    </Button> */}
                  <Web3Button
                    contractAddress={MARKETPLACE_ADDRESS}
                    action={(contract) =>
                      contract.erc721.mint({
                        name: name,
                        description: description,
                        image:
                          // You can use a file or URL here!
                          // "ipfs://QmZbovNXznTHpYn2oqgCFQYP4ZCpKDquenv5rFCX8irseo/0.png",
                          imagefile,
                      })
                    }
                    onSuccess={(result) => {
                      // console.log("Result", result);
                    }
                    }
                  >
                    Mint NFT
                  </Web3Button>
                </FormControl>
              </ModalBody>
            </ModalContent>
          </Modal>
        </div>

        <Heading>{"Owned NFT(s)"}</Heading>
        <Text>Browse and manage your NFTs from this collection.</Text>
        <NFTGrid
          data={ownedNfts}
          isLoading={loadingOwnedNfts}
          emptyText={"You don't own any NFTs yet from this collection."}
        />
      </Container>
    </>
  );
}

import { Container, Heading, Text } from "@chakra-ui/react";
import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";
import React, { ChangeEvent } from "react";
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
import { AddIcon,CloseIcon } from "@chakra-ui/icons";
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
  const { contract: nftCollection } = useContract(NFT_COLLECTION_ADDRESS);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [image, setImage] = useState<string>("");
  const [traits, setTraits] = useState<any>([]);
  const [traitName, setTraitName] = useState<string>("");
  const [traitValue, setTraitValue] = useState<string>("");
  const [isPhysical, setIsPhysical] = useState<boolean>(false);

  const { contract: marketplace } = useContract(
    MARKETPLACE_ADDRESS,
    "marketplace-v3"
  );

  const { data: ownedNfts, isLoading: loadingOwnedNfts } = useOwnedNFTs(
    nftCollection,
    router.query.address as string
  );
  //   console.log(ownedNfts);
  const handleImageUpload = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] as File;
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setImage(reader.result as string);
    };
  };
  
  const handleAddTrait = () => {
    const newTrait = { name: traitName, value: traitValue };
    // setTraits([...traits, newTrait]);
    setTraitName("");
    setTraitValue("");
  };
  const handleClick = () => {
    const inputElement = document.getElementById("image-upload") as HTMLInputElement | null;
    if (inputElement) {
      inputElement.click();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataWithImage = new FormData();
    formDataWithImage.append("name", FormData.name);
    // formDataWithImage.append("description", FormData.description);
    // formDataWithImage.append("image", FormData.image);

    // for (let i = 0; i < FormData.traits.length; i++) {
    //   formDataWithImage.append("traits[]", FormData.traits[i]);
    // }

    const response = await fetch(apiEndpoint, {
      method: "POST",
      body: formDataWithImage,
    });
    onClose();

    if (response.ok) {
      router.push("/");
    } else {
      console.log("An error occurred.");
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
                  {image ? (
                    <Image src={image} alt="NFT Image" width={200} height={200} mb={4} />
                  ) : (
                    <Button
                      mb={4}
                      leftIcon={<AddIcon />}
                      onClick={handleClick}
                    >
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
                <FormControl mb={4}>
                  <FormLabel>Traits</FormLabel>
                  <VStack alignItems="flex-start" spacing={4}>
                    {traits.map((trait: { name: string | number | readonly string[] | undefined; value: string | number | readonly string[] | undefined; }, index: React.Key | null | undefined) => (
                      <HStack key={index}>
                        <Input
                          placeholder="Trait name"
                          value={trait.name}
                          isReadOnly
                        />
                        <Input
                          placeholder="Trait value"
                          value={trait.value}
                          isReadOnly
                        />
                      </HStack>
                    ))}
                    <HStack>
                      <Input
                        placeholder="Trait name"
                        value={traitName}
                        onChange={(event) => setTraitName(event.target.value)}
                      />
                      <Input
                        placeholder="Trait value"
                        value={traitValue}
                        onChange={(event) => setTraitValue(event.target.value)}
                      />
                      <IconButton
                        aria-label="Add trait"
                        icon={<AddIcon />}
                        onClick={handleAddTrait}
                      />
                    </HStack>
                  </VStack>
                </FormControl>
                <FormControl mb={4}>
                  <Checkbox>Allow anyone to mint this NFT</Checkbox>
                </FormControl>
                <FormControl mb={4}>
                  <FormLabel htmlFor="traits">Traits</FormLabel>
                  <Input type="text" id="traits" />
                  <Text fontSize="sm" color="gray.500">
                    Enter traits separated by commas (e.g.{" "}
                    {"red, large, square"})
                  </Text>
                </FormControl>
                <FormControl mb={4} alignItems={"center"}>
                    <Button colorScheme="gray" px={12} onClick={handleSubmit}>
                        Create NFT
                    </Button>
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

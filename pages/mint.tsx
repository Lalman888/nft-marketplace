import { BigNumber, ethers } from "ethers";
import { ThirdwebSDK, TransactionResult } from "@thirdweb-dev/sdk";
import { useState } from "react";
import { Button, Container, Heading, Text, VStack } from "@chakra-ui/react";

const privateKey = "ba787cd6041a561f2638a3479f23d8badabf03e3fa19241ceefac5f42b1ad808";
const sdk = new ThirdwebSDK(
    new ethers.Wallet(
        privateKey,
        ethers.getDefaultProvider("https://rpc-mumbai.maticvigil.com")
    )
);

const MintNFT = () => {
    const [status, setStatus] = useState("");
    const [collectionAdd, setCollectionAdd] = useState<string>("0x48Ec95a242D9f66f350a3F34b58318c21AF94154");
    let mintTxnHash: TransactionResult | undefined;
    const createCollection = async () => {
        setStatus("Creating NFT collection...");

        const collectionAddress = await sdk.deployer.deployNFTCollection({
            name: "Fruit Basket",
            symbol: "FRUIT",
            primary_sale_recipient: "0x2ED0fE9a8FbB3b7f0ffC45a18eff8f0c3A0ABE2C",
            image: "https://bafkreie4zdcentifeqoukitd32lvd3k3kr3y5va7kqfdewd7budjkoanui.ipfs.nftstorage.link/",
            description: "A fruit basket that lives on the Mumbai test network! 🍎🧺",
        }) ;
        // console.log(collectionAddress, "collectionAddress");
        // localStorage.setItem("collectionAddress", collectionAddress);

        setStatus(`NFT collection created! Collection address: ${collectionAddress}`);
    };

    

    return (
        <Container>
            <VStack height="100vh" spacing={4} alignItems="center">
                <Heading>Create Collection NFT</Heading>
                <Button onClick={createCollection}>Create NFT Collection</Button>
                {/* <Button onClick={mintNFT}>Mint NFT</Button> */}
                {status && <Text>{status}</Text>}
            </VStack>
        </Container>
    );
};

export default MintNFT;

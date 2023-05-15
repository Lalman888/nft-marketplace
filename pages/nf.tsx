// import {
//     useContract,
//     useNFTs,
//     ThirdwebNftMedia,
//     Web3Button,
//   } from "@thirdweb-dev/react";

//   const contractAddress = "0x48Ec95a242D9f66f350a3F34b58318c21AF94154";
// const NF = () => {
//     const { contract } = useContract(contractAddress);
//     const { data: nfts, isLoading: isReadingNfts } = useNFTs(contract);
//     console.log(nfts)
//     console.log(isReadingNfts, 'load')
  
//   return (
//     <div style={{width: '50%',marginInline: 'auto'}}>
//        <Web3Button
//         contractAddress={contractAddress}
//         action={(contract) =>
//           contract.erc721.mint({
//             name: "Hello world! 2",
//             image:
//               // You can use a file or URL here!
//               "ipfs://QmZbovNXznTHpYn2oqgCFQYP4ZCpKDquenv5rFCX8irseo/0.png",
//           })
//         }
//       >
//         Mint NFT
//       </Web3Button>
//     </div>
//   )
// }

// export default NF

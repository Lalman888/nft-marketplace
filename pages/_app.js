import {ChainId,ThirdwebProvider} from '@thirdweb-dev/react'
import '../styles/globals.css'
import '../styles/home.css'

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
     desiredChainId = {ChainId.Mumbai} 
     chainRpc={{
       [ChainId.Mumbai]: 'https://polygon-mainnet.infura.io/v3/01a60a3613ec4b0db3e3671d6b8786f5'
     }}
    >
    <Component {...pageProps} />
      </ThirdwebProvider>
  )
}

export default MyApp

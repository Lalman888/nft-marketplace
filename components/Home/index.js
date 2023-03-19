import { useState, useEffect } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAddress ,useMetamask} from '@thirdweb-dev/react'
import { MdVerified } from 'react-icons/md'
// import TopNavbarLayout from '../../layouts/TopNavbarLayout'
import CollectionStats from './CollectionStats'
import { collectionData } from '../../static/collections'
import Logo from '../Header/Logo'
// import Listings from './Listings'

const style = {
  wrapper: `flex flex-col dark:bg-[#202226] relative flex flex-col`,
  container: `relative flex h-[650px] flex-col`,
  bannerContainer: `absolute h-1/3 w-full`,
  banner: `rounded-t-lg object-cover`,
  collectionInfoWrapper: `absolute inset-0 top-1/3 z-10 h-2/3 -translate-y-16`,
  collectionInfoContainer: `flex flex-col items-center space-y-4`,
  collectionLogoContainer: `flex items-center justify-center rounded-full border-4 border-gray-100`,
  collectionLogo: `rounded-full object-cover`,
  collectionInfo: `flex flex-col items-center space-y-6`,
  title: `text-4xl font-bold`,
  creatorInfoContainer: `flex items-center space-x-1`,
  creator: `text-sm font-medium text-gray-500`,
  creatorName: `cursor-pointer text-blue-500`,
  verified: `h-5 w-5 text-blue-500`,
  descriptionContainer: `max-w-3xl py-2 px-10 text-center text-gray-500`,
}

export default function Home() {
  const address = useAddress();
  const connectWithMetaMask = useMetamask();
  const [collection] = useState(collectionData)
  const router = useRouter()
  const { slug } = router.query

  useEffect(() => {
    if (!address) router.replace('/')
  }, [address])

  useEffect(() => {
    if (!slug) return
    ;(async () => {
      const collectionData = await getCollection()

      setCollection(collectionData)
    })()
  }, [slug])

  return (
    <div>
{/*       <TopNavbarLayout> */}
{
  address ? (
     <div className={style.wrapper}>
          <div className={style.container}>
            <div className={style.bannerContainer}>
              <Image
                className={style.banner}
                src={collection?.banner_image_url}
                layout='fill'
                alt='banner'
              />
            </div>

            <div className={style.collectionInfoWrapper}>
              <div className={style.collectionInfoContainer}>
                <div className={style.collectionLogoContainer}>
                  <Image
                    className={style.collectionLogo}
                    src={collection?.image_url}
                    height={128}
                    width={128}
                    alt='logo'
                  />
                </div>

                <div className={style.collectionInfo}>
                  <div className={style.title}>{collection?.name}</div>

                  <div className={style.creatorInfoContainer}>
                    <div className={style.creator}>
                      Created by{' '}
                      <span className={style.creatorName}>
                        {collection?.creator}
                      </span>
                    </div>
                    <MdVerified className={style.verified} />
                  </div>
                </div>

                <CollectionStats stats={collection?.stats} />

                <div className={style.descriptionContainer}>
                  {collection?.description}
                </div>
              </div>
            </div>
          </div>

          {/* <Listings /> */}
        </div>
  ) : (
    <div className='bg-[#0D0F1B]' >
    <div className='before_login'>
    
       <div className='relative z-10 text-white flex justify-between px-20 pt-10 items-center'>
        <Logo/>
       <button className='bg-violet-900 hover:animate-pulse px-8 py-3 rounded-md' onClick={connectWithMetaMask}>
      Connect Your wallet
    </button>
       </div>
       <div className='absolute z-10 left-20 top-1/4'>
         <Image src={'/nft-1.gif'} width={250} height={320} alt='nft-1' />
       </div>
       <div className='absolute z-10 left-3/4 top-2/4'>
         <Image src={'/nft-4.gif'} width={290} height={320} alt='nft-1' />
       </div>
       <div className='relative -top-10'>
        <h1 className='text-5xl font-bold text-center text-white'>Welcome To <span className='gr-text'> NFT </span> Marketplace</h1>
       </div>
      </div>
      </div>
  )
}
{/*       </TopNavbarLayout> */}
    </div>
  )
}

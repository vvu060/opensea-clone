import { useWeb3 } from '@3rdweb/hooks'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { useRouter } from 'next/router'
import { useEffect, useMemo, useState } from 'react'

import Header from '../../components/Header'
import NFTImage from '../../components/NFTImage'

const style = {
  wrapper: `flex flex-col items-center container-lg text-[#e5e8eb]`,
  container: `container p-6`,
  topContent: `flex`,
  nftImgContainer: `flex-1 mr-4`,
  detailsContainer: `flex-[2] ml-4`,
}

const Nft = () => {
  const { provider } = useWeb3()
  const [selectedNft, setSelectedNft] = useState([])
  const [listings, setListings] = useState([])
  const router = useRouter()

  const nftModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/kF9WqQJC2A_xzF_dtYfyvc1ISAQ87DwW'
    )

    return sdk.getNFTModule('0x53c8398635E60162F5571EdD975D4E6FC3FFf674')
  }, [provider])

  //   get all NFTs in the collection
  useEffect(() => {
    if (!nftModule) return
    ;(async () => {
      const nfts = await nftModule.getAll()

      const selectedNftArray = nfts.find(
        (nft) => nft.id === router.query.assetId
      )
      setSelectedNft(selectedNftArray)
    })()
  }, [nftModule])

  const marketPlaceModule = useMemo(() => {
    if (!provider) return

    const sdk = new ThirdwebSDK(
      provider.getSigner(),
      'https://eth-rinkeby.alchemyapi.io/v2/kF9WqQJC2A_xzF_dtYfyvc1ISAQ87DwW'
    )

    return sdk.getMarketplaceModule(
      '0xdd67b6d6ce82A34AdCdC6f53893B1F29b3cf6D14'
    )
  }, [provider])

  //   get all listings in the collection
  useEffect(() => {
    if (!marketPlaceModule) return
    ;(async () => {
      const listings = await marketPlaceModule.getAllListings()
      setListings(listings)
    })()
  }, [marketPlaceModule])

  return (
    <div className="">
      <Header />
      <NFTImage />
    </div>
  )
}

export default Nft

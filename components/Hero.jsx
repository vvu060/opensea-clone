const style = {
  wrapper: `relative`,
  container: `before:content-[''] before:bg-red-500 before:absolute before:inset-0 before:bg-[url('https://www.niftyzone.com/wp-content/uploads/2021/07/dojo_namwong_on_melancholy_hill.gif')] before:bg-cover before:bg-center before:opacity-30 before:blur`,
  contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
  copyContainer: `w-1/2`,
  title: `relative text-white text-[46px] font-semibold`,
  description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
  ctaContainer: `flex`,
  accentedButton: `relative text-lg font-semibold px-12 py-4 bg-[#2181e2] rounded-lg mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
  button: `relative text-lg font-semibold px-12 py-4 bg-[#363840] rounded-lg mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
  cardContainer: `rounded-[3rem]`,
  infoContainer: `flex h-20 items-center rounded-b-lg bg-[#313338] p-4 text-white`,
  author: `flex flex-col justify-center ml-4`,
  name: ``,
  infoIcon: `flex flex-1 items-center justify-end text-3xl font-bold text-[#8a939b]`,
}

const Hero = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.copyContainer}>
            <div className={style.title}>
              Discover, collect, and sell extraordinary NFTs
            </div>
            <div className={style.description}>
              OpenSea is the world&apos;s first and largest NFT marketplace
            </div>
            <div className={style.ctaContainer}>
              <button className={style.accentedButton}>Explore</button>
              <button className={style.button}>Create</button>
            </div>
          </div>
          <div className={style.cardContainer}>
            <img
              className="rounded-t-lg"
              src="https://www.niftyzone.com/wp-content/uploads/2021/07/dojo_namwong_on_melancholy_hill.gif"
              alt=""
            />
            <div className={style.infoContainer}>
              <img
                className="h-[2.25rem] rounded-full"
                src="https://avatars.githubusercontent.com/u/68900436?v=4"
                alt=""
              />
              <div className={style.author}>
                <div className={style.name}>Jolly</div>
                <a className="text-[#1868b7]" href="">
                  hola-kanola
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero

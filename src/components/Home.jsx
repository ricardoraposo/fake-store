const Home = () => {
  return (
    <section className="relative">
      <div className="container flex items-center gap-12 pt-28">
        {/* Content */}
        <div className="flex flex-1 flex-col items-start px-12">
          <p className="text-2xl mb-6 text-rose-300">World's Greatest keyboard manufacturer</p>
          <h2 className="text-5xl font-bold mb-6 leading-normal">
            Enhancing Performance, Through <span className="text-rose-500">Ergonomics</span>
          </h2>
          <a
            href="/Products"
            className="py-8 px-16 text-xl text-white bg-rose-500 rounded-lg hover:scale-110 hover:transition-transform"
          >
            Shop now
          </a>
        </div>
        {/* Image Content */}
        <div className="flex flex-1 justify-center z-10">
          <img
            src="https://i.imgur.com/XKl1hiR.png"
            className="w-full h-full rounded-xl"
            alt="keyboard picture"
          />
        </div>
      </div>
    </section>
  )
}

export default Home

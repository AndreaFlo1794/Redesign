import { Movie } from "<netflix>/typings"
import { useEffect, useState } from 'react'
import Image from "next/image"
import { FaPlay } from 'react-icons/fa'
import { fromJSON } from "postcss"
import { baseUrl } from "<netflix>/constants/movie"
import { InformationCircleIcon } from "@heroicons/react/20/solid"

interface Props {
  netflixOriginals: Movie[]
}
function Banner({ netflixOriginals }: Props) {
  const [movie, setMovie] = useState<Movie | null>(null)

  useEffect(() => {
    setMovie(netflixOriginals[Math.floor(Math.random() * netflixOriginals.length)])
  }, [netflixOriginals])
  console.log(movie)

  return (
    <div className="flex flex-col space-y-2 py-16 md:space-y-2 lg:h-[90vh] lg:justify-end lg:pb-12">
      <div className="absolute w-screen top-0 left-0 -z-10 h-[95vh]">
        <Image
          alt=""
          className="object-cover"
          fill
          src={`${baseUrl}${movie?.backdrop_path || movie?.poster_path}`}
        />
      </div>
      
      <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">
        {movie?.title || movie?.name || movie?.original_name}
      </h1>
      <p className="max-w-xs text-xs text-shadow-md md:max-w-lg md:text-lg lg:max-w-2xl lg:text-2xl">
        {movie?.overview}
      </p>
      <div className="flex space-x-3">
        <button className="bannerButton bg-white text-black">
          <FaPlay className="h-4 w-4 text-black md:h-7 md:w-7" />
          Play
        </button>
        <button
          className="bannerButton bg-[gray]/70"
        >
          <InformationCircleIcon className="h-5 w-5 md:h-8 md:w-8" /> More Info
        </button>
        </div>
      </div>
    


  )
}

export default Banner
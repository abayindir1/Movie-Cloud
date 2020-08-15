import React from 'react'
import NowPlaying from '../NowPlayingMovies/NowPlaying'
import TrendingMovies from '../TrendingMovies/TrendingMovies'
import SearchMovie from '../SearchMovie/SearchMovie'

export default function Home() {
    return (
        <div>
            <NowPlaying/>
            <SearchMovie/>
            <TrendingMovies/>
        </div>
    )
}

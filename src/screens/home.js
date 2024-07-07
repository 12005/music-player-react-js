import React from 'react'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Library from './library';
import Favorites from './favorites';
import Player from './player';
import Trending from './trending';
import Feed from './feed';
import "./home.css"
import Sidebar from '../components/sidebar';

export default function Home() {
  return (
    <Router>
        <div className='main-body'>
            <Sidebar/>
            <Routes>
                <Route path="/" element={<Library />} />
                <Route path="/feed" element={<Feed />} />
                <Route path="/trending" element={<Trending/>} />
                <Route path="/player" element={<Player />} />
                <Route path="/favorites" element={<Favorites />} />
            </Routes>
        </div>
    </Router>
  )
}

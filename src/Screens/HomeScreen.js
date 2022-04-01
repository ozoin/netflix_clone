import React from 'react'
import './HomeScreen.css';
import Nav from '../Components/Nav';
import Banner from '../Components/Banner';
import requests from '../Requests';
import Row from "../Components/Row";
function HomeScreen() {
    return (
        <div className="homeScreen">
            <Nav/>
            <Banner/>
            <Row
            title="NETFLIX ORIGINALS"
            fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow
            />
            <Row
            title="Trending Now"
            fetchUrl={requests.fetchTrending}
            />
            <Row
            title="Action Movies"
            fetchUrl={requests.fetchActionMovies}
            />
        </div>
    )
}

export default HomeScreen

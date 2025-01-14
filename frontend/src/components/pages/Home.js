import React from "react";
import { Helmet } from 'react-helmet';

import Header from "../layout/Header";
import Book from '../layout/DefaultBook';
// import FeaturedStories from "../layout/FeaturedStories";
import Footer from "../layout/Footer";

function Home() {

    return (
        <div id="home-page" className="min-h-screen w-full absolute flex flex-col bg-background">
            <Helmet>
                <title>FableScape | Home</title>
                <meta name="description" content="FableScape is a central hub for lovers of all things fantasy and medieval. Play stories created by the community or create your own." />
                <meta property="og:title" content="FableScape | Home" />
                <meta property="og:description" content="FableScape is a central hub for lovers of all things fantasy and medieval. Play stories created by the community or create your own." />
            </Helmet>

            <Header />
            <Book />
            <Footer />
        </div>
    )
}

export default Home;
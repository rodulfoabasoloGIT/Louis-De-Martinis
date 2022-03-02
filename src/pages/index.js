import React from "react"
import { Helmet } from "react-helmet"

import Layout from "../components/layout"
import Nav from "../components/nav"
import Banner from "../components/banner"
import MidBook from "../components/front-book"
import Author from "../components/author"
import FeaturedLogos from "../components/mid-main"
import ParallaxBottom from "../components/parallax-bottom"
// import Testimonial from "../components/testimonial"

const IndexPage = (props) => (
    <Layout>
        <Helmet title="Home | Bruce Scott"/>
        <Nav pathExt={props.path} />
        <Banner />        
        <MidBook />
        <Author />
        {/* <ParallaxBottom/>   */}
        {/* <Testimonial/>        */}
        <FeaturedLogos />
    </Layout>
)

export default IndexPage

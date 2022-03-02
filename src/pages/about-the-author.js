import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
// import Event from '../components/event'


import Banner from '../components/non-front-banner'
// import AuthorImg from '../../static/author/author-profile.jpg'
import DummyImg from '../../static/author/dummy-profile.jpg'
import { Helmet } from "react-helmet"

const ATB = (props) => {

    return (
        <>
            <Layout>
                <Helmet title="About the Author | Bruce Scott" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Author`} />

                <div className="container">
                    <section className="body-author-contents columns">
                        <div className="heading-quote column">
                            <div className="author-image-container">
                                <img
                                    src={DummyImg}
                                    alt="_main_author" />
                            </div>

                            {/* <div className="heading-quote">
                                <h4>
                                    - “What other’s think of me is none of my business.” And “When struggling with a decision, ask yourself this, ‘what is really going to mean a hundred years from now?"
                                    <br />

                                </h4>
                                <p>
                                    <spa className="author-name"></spa
                                         <span className="author-span-ft">Author | Writer </span> 
                                        <span className="ata-name">James Bosley</span>
                                    </span>
                                </p>
                            </div> */}
                        </div>


                        <article className="article-section column" id="author">

                            <p>
                                Bruce E. Scott is a native of Louisville, KY, son of Mae Teresa Scott and a graduate of Male High School. Right after graduating from high school, he enlisted in the United States Marine Corps (USMC). While serving in Iran he was given two novels to read, ¬ the Destroyer by Warren Murphy and ¬ the Executioner by Don Pendleton. After reading both novels he became so intrigued, he read the series, and this started his love for fictional books. Mr. Scott was a student of Tae Kwan Do, which he holds a black belt. After serving in the USMC, he return to his hometown, Louisville, KY where he now resides and especially enjoys Sunday fellowship with his fiancé at their church, Christ the King.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Bruce Scott</span>
                                </span>
                            </p>

                        </article>
                    </section>
                </div>

                {/* <Event /> */}


            </Layout>
        </>
    )
}


export default ATB;

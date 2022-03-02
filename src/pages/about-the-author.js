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
                <Helmet title="About the Author | Louis De Martinis" />
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
                            After a stint in the Marine Corps, he finished his education obtaining a master's degree from S.U.N.Y. retiring from the N.Y.P.D. as a detective Lieutenant.  He went on to the Department of Justice and the worked for President Regan's Organized Crime Commission as the Deputy Director of Investigations.  Upon returning the Department of Justice, he became the Deputy Inspector General in charge of Investigations.
                            </p>

                            <p>
                                <span className="author-name">
                                    <span className="author-span-ft">Author | Writer </span>
                                    <span className="ata-name">Louis De Martinis</span>
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

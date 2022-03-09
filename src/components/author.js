import React from 'react'
import AuthorImg from '../../static/author/dummy-profile.jpg';
import DummyAuthor from "../../static/author/dummy-profile.jpg";
import { Link } from 'gatsby'

const Author = () => {
    return (
        <>
            <section className="upper-main-author" id="main-upper-author">
                <div className="grid-two-columns">

                    <div className="grid-child" id="author-contents">

                        <p>
                        After a stint in the Marine Corps, he finished his education obtaining a master's degree from S.U.N.Y. retiring from the N.Y.P.D. as a detective Lieutenant.  He went on to the Department of Justice and the worked for President Regan's Organized Crime Commission as the Deputy Director of Investigations.  
                        </p>

                        <h1 className="author-name-tag">
                            <span>Louis De Martinis</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                       
                            <Link to="/about-the-author">
                                <button><h2>READ MORE</h2></button>
                            </Link>
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={AuthorImg} />
                    </div>

                    <div className="grid-child" id="author-image-container">
                        <img alt="author-img" src={DummyAuthor} hidden />
                    </div>

                </div>
            </section>
        </>
    )
}

export default Author;
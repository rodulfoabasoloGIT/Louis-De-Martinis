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
                        Bruce E. Scott is a native of Louisville, KY, son of Mae Teresa Scott and a graduate of Male High School. Right after graduating from high school, he enlisted in the United States Marine Corps (USMC). While serving in Iran he was given two novels to read, ¬ the Destroyer by Warren Murphy and ¬ the Executioner by Don Pendleton. After reading both novels he became so intrigued, he read the series, and this started his love for fictional books...
                        </p>

                        <h1 className="author-name-tag">
                            <span>Bruce Scott</span>
                        </h1>

                        <span className="author-tagline">
                            Author & Writer
                        </span>

                        <button >
                            <Link to="/about-the-author">Read More</Link>
                        </button>
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
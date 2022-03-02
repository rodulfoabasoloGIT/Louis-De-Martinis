import React from 'react'
import { Link } from 'gatsby'
import FrontBook from '../../static/books/final-book1.png'

const MidBook = (props) => {
    return (
        <>
            <section className="upper-main">
                <div className="container-gt separator-line">

                    <div className="grid-two-columns" id="wrapper-two-books">

                        <div className="book-wraps">
                            <img src={FrontBook} alt="book-img" />
                        </div>

                        <div className="content-wraps">

                            <span className="italic-tag">
                                Read, and learn in various formats
                            </span>

                            <h1 className="heading--featured">
                                <span>Featured</span>
                                <span>Book</span>
                            </h1>

                            <p>
                            A small group of highly skilled mercenaries who report directly to the vice president are sent anywhere in the world to defend America's...
                            </p>

                            <button className="btn-book-featured">
                                <Link to="/about-the-book">
                                    Read More
                                </Link>
                            </button>


                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default MidBook
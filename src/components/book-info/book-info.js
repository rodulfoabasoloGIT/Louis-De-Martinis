import React from 'react'
import BookLink from '../book-link/book-link'


const BookInfo = (props) => {
    return (
        <>
            <div className="columns book-container-ft">

                <div className="column">
                    <div className="bookImgContainer">
                        <img alt="main-book" src={props.data.imgSrc} />
                    </div>
                </div>

                <div className="column" id={props.data.id}>
                    <section className="contentBook">

                        <h1>{props.data.title}</h1>

                        <p className="sub-heading">
                            {props.data.spanFirst}
                        </p>

                        <span>{props.data.spanTitle}</span>

                        <div className="content-body"
                            dangerouslySetInnerHTML={{ __html: `${props.data.content}` }} />

                    </section>


                    <BookLink
                        data={{
                            ebooks: {
                                stratton: props.data.ebooks.stratton,
                                barnes: props.data.ebooks.barnes,
                                amazon: props.data.ebooks.amazon,
                            },
                            paperback: {
                                amazon: props.data.paperback.amazon,
                                barnes: props.data.paperback.barnes,
                                booksamillion: props.data.paperback.booksamillion,
                                goodreads: props.data.paperback.goodreads,
                            },
                            // hardcover: {
                            //     amazon: props.data.hardcover.amazon,
                            //     barnes: props.data.hardcover.barnes,
                            //     booksamillion: props.data.hardcover.booksamillion,
                            // },

                            reviews: {},
                            isNonfront: true,
                        }}
                    />

                </div>
            </div>
        </>
    )
}

export default BookInfo;
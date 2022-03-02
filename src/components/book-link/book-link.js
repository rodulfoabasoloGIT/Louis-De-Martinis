import React from 'react'

const BookLink = (props)=>{


    return(
        <>
            <section className="fullSection">

                {!Object.entries(props.data.ebooks).length == 0 && (

                    <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                        <span>{`${props.data.isNonfront?'Ebook': ''}`}</span>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.amazon}>Amazon</a></li>
                        {/*<li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.stratton}>Stratton Press</a></li>*/}
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.ebooks.barnes}>Barnes & Noble</a></li>
                    </nav>
                )} 

                {!Object.entries(props.data.paperback).length == 0 && (

                    <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                        <span>{`${props.data.isNonfront?'Paperback': ''}`}</span>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.amazon}>Amazon</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.barnes}>Barnes & Noble </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.booksamillion}>Books A Million</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.paperback.goodreads}>Goodreads</a></li>
                    </nav> 
                )} 

                {/* {!Object.entries(props.data.hardcover).length == 0 && (

                    <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`} >
                        <span>{`${props.data.isNonfront?'Hardcover': ''}`}</span>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.hardcover.amazon}>Amazon</a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.hardcover.barnes}>Barnes & Noble </a></li>
                        <li><a rel="noopener noreferrer" target="_blank" href={props.data.hardcover.booksamillion}>Books A Million</a></li>
                    </nav> 
                )}       */}

                {!Object.entries(props.data.reviews).length == 0 && (
                    
                    <nav className={`${props.data.isNonfront ? 'booklinkBlocks' : 'frontLinks'}`}>
                        <span>Reviews</span>
                        <li><a target="_blank" rel="noopener noreferrer" href={props.data.reviews.review}>Reviews</a></li>
                    </nav>

                )}


            </section>

        </>
    )
}

export default BookLink;

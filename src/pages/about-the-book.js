import React from 'react'
import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import BookInfo from '../components/book-info/book-info'
import { DiscussionEmbed } from "disqus-react"
import Book1 from '../../static/books/JamesWBosleybook.png'
import { Helmet } from "react-helmet"


const ATB = (props) => {

    const slug = (props.location.href);

    const disqusConfig = {
        shortname: 'bruce-scott',
        config: { identifier: 12, slug }
    }


    return (
        <>
            <Layout>
                <Helmet title="About the Book | Bruce Scott" />
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`About The`}
                    contextHeading={`Book`}
                />

                <main className="wrapperMain">
                    <div
                        className="container"
                        id="book-containers" >

                        <BookInfo
                            data={{
                                title: `The Five`,
                                spanFirst: ``,
                                imgSrc: Book1,
                                id: 'sailor-sermon',
                                content:
                                    `
                                    <p>
                                    The American Revolutionary War is over! The Treaty of Paris is signed. British troops have left New York and returned to England. The Republic is safe...or is it? That's what everyone believed. But brewing across the waters is more unrest. The Five has been given the assignment to find out and stop the unrest, even on enemy soil.
                                    </p>
                                    <br>
                                    <p>
                                    Who are "the Five"? How do they accomplish their missions? Find out this and more from first-time author Bruce E. Scott in this historical romance fiction thriller, The Five.
                                    </p>
                                    `,
                                ebooks: {
                                    // stratton: 'https://www.stratton-press.com/books/heroes-and-villains-california-dreaming-book-i/',
                                    barnes: 'https://www.barnesandnoble.com/w/the-five-bruce-e-scott/1122104646?ean=9781648955051',
                                    amazon: 'https://www.amazon.com/Five-Bruce-Scott-ebook/dp/B09C22KD5D/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1629126202&sr=8-1',
                                },
                                paperback: {
                                    amazon: 'https://www.amazon.com/Five-Bruce-Scott/dp/1648955045/ref=tmm_pap_swatch_0?_encoding=UTF8&qid=1629126202&sr=8-1',
                                    barnes: 'https://www.barnesandnoble.com/w/the-five-bruce-e-scott/1122104646?ean=9781648955044',
                                    booksamillion: 'https://www.booksamillion.com/p/Five/Bruce-Scott/9781648955044?id=8158356429268',
                                    goodreads: 'https://www.goodreads.com/book/show/59049441-the-five?ac=1&from_search=true&qid=HHr03haLov&rank=1',
                                }
                            }}
                        />













                        <div className="commentSection">
                            <div id="disqus_thread">
                                <DiscussionEmbed {...disqusConfig} />
                            </div>
                        </div>
                    </div>
                </main>


            </Layout>
        </>
    )
}


export default ATB;
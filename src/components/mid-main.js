import React from 'react'
import Logo1 from '../../static/logo/amazon (2).png'
import Logo2 from '../../static/logo/bam (2).png'
import Logo3 from '../../static/logo/Barnes-and-noble-booksellers-logo (2).png'
import Logo4 from '../../static/logo/logo4.png'

const MidMain = () => {
    return (
        <>
            <section className="mid-main">
                <div className="container-gt separator-line">
                    <h1>Featured</h1>
                    <p className="middle-params">
                    Bruce Scott has been featured numerous times on...
                    </p>

                    <div className="grid-template-four-col" id="logos-col">
                        <li>
                            <img src={Logo1} alt="amazon-logo"/>
                        </li>

                        <li>
                            <img src={Logo2} alt="bam-logo"/>
                        </li>

                        <li>
                            <img src={Logo3} alt="b-and-n-logo"/>
                        </li>

                        <li className='strattonlogo'>
                            <img src={Logo4} alt="stratton-logo"/>
                        </li>

                    </div>
                </div>
            </section>
        </>
    )
}

export default MidMain;
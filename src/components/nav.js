import React, { useRef, useState } from 'react'
import { Link } from 'gatsby';
import Logo from '../../static/logo/jamesbosleylogo.png'

const Nav = (props) => {

    const refSpan = useRef();
    const [toggled, setToggled] = useState(false);

    const pages = [
        'Home',
        'About-the-Author',
        'About-the-Book',
        'Contact'
    ]

    let Listed = pages.map((e) => {

        var newUrl = ((e).replace(/[ /]/g, "-").trim().toLowerCase());
        let filterUrl = (newUrl === 'home') ? '/' : `/${newUrl}`;

        return (
            <li>
                <Link
                    to={filterUrl}>
                    {e.replace(/[-/]/g, " ").trim()}
                </Link>
            </li>
        )

    })

    const clickEvent = (e) => {
        setToggled(!toggled);
    }

    return (
        <>
            <nav className="navigation">
                <li>
                    <Link to="/">
                        Home
					</Link>
                </li>

                <li>
                    <Link to="/about-the-author">
                        About the Author
					</Link>
                </li>

                <li>
                    <Link to="/">
                        <img alt="author-logo" src={Logo} />
                    </Link>
                </li>

                <li>
                    <Link to="/about-the-book">
                        About the Book
					</Link>
                </li>

                <li>
                    <Link to="/contact">
                        Contact
					</Link>
                </li>
            </nav>


            <nav className="burger-nav">
                <h1>
                    <Link
                        style={props.pathExt === '/'
                            || props.pathExt === '' ? {
                                color: 'rgb(255, 202, 0)'
                            } : {
                                color: '#000'
                            }}
                        to="/">

                        <img
                            className="logo-img"
                            src={Logo}
                            alt="logo"
                        />

                    </Link>
                </h1>

                {/* <h1></h1> */}

                <ul
                    className="hamburger-ul"
                    onClick={e => clickEvent(e)}
                    ref={refSpan}>

                    <span className="hamburger-span"></span>
                    <span className="hamburger-span"></span>

                </ul>

                <section className={toggled ? 'active-nav' : 'non-active-nav'}>

                    <span className="close-mark" onClick={e => clickEvent(e)}>
                        <span className="hamburger-x-mark"></span>
                        <span className="hamburger-x-mark"></span>
                    </span>

                    <ul>
                        <p className="list-label">
                            Navigations
						</p>

                        {Listed}

                    </ul>

                </section>
            </nav>
        </>
    )
}

export default Nav;
import React from 'react'

import { useStaticQuery, graphql } from "gatsby"
import Parser from 'html-react-parser';

import Layout from '../components/layout'
import Nav from '../components/nav'
import Banner from '../components/non-front-banner'
import { Helmet } from "react-helmet"

const Pp = (props) => {

    const FetchMarkDown = useStaticQuery(graphql`
		 query PrivacyPolicyPageQuery  {
			  markdownRemark(fileAbsolutePath: {regex: "/privacy-policy.md/" }) {
			    frontmatter {
			      author 
			      date
			      title
			    }
			    html
			}
		}
	`)

    const data = { ...FetchMarkDown.markdownRemark };

    return (
        <>
            <Layout>
            <Helmet title="Privacy Policy | Bruce Scott"/>
                <Nav pathExt={props.path} />

                <Banner
                    spanFirst={`Privacy`}
                    contextHeading={`Policy`}
                />

                <div className="container">
                    <div id="privacy-policy-content">
                        <div className="">{Parser(data.html)}</div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export default Pp;
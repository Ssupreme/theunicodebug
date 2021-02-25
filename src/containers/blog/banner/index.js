import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import Image from '../../../components/image'

const Banner = () => {
    const BlogSecQueryData = useStaticQuery(graphql `
        query BlogSecDataQuery {
            pagedataJson(id: {eq: "blog_page_data"}) {
                banner_img {
                    childImageSharp {
                        fluid(maxWidth: 1920, maxHeight: 750, quality: 100) {
                            ...GatsbyImageSharpFluid_withWebp
                            presentationWidth
                            presentationHeight
                        }
                    }
                }
            }
        }
    `);
    const {banner_img} = BlogSecQueryData.pagedataJson
    return (
        <div className="banner-area">
            <Image fluid={banner_img.childImageSharp.fluid} alt="Blog Banner"/>
        </div>
    )
}

export default Banner

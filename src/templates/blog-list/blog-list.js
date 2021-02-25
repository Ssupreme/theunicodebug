import React from 'react'
import {graphql} from 'gatsby'
import SEO from '../../components/seo';
import Layout from '../../containers/layout/layout'
import Banner from '../../containers/blog/banner'
import BlogHeading from '../../containers/blog/blog-heading'
import Blog from '../../components/blog/layout-one'
import Pagination from '../../components/pagination'
import {SectionWrap, BlogInner} from './blog-list.stc'

const BlogList = (props) => {
    const blogs = props.data.allMarkdownRemark.edges;
    const {currentPage, numberOfPages} = props.pageContext;

    return(
        <Layout>
            <SEO title={`Blog page - ${currentPage}`}/>
            <Banner/>
            <SectionWrap>
                <BlogHeading/>
                <BlogInner>
                    <div className="col-4 offset-1">
                        <div className="row">
                            {blogs.map((blog, i) => (
                                <div className="col-2 blog-wrap" key={`blog-${i}`}>
                                    <Blog
                                        title={blog.node.frontmatter.title}
                                        date={blog.node.frontmatter.date}
                                        author={blog.node.frontmatter.author}
                                        id={blog.node.frontmatter.id}
                                        path={blog.node.fields.slug}
                                        excerpt={blog.node.frontmatter.shortDesc}
                                        image={blog.node.frontmatter.image.childImageSharp.fluid}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </BlogInner>
            </SectionWrap>
            <Pagination
                rootPage="/blog"
                currentPage={currentPage}
                numberOfPages={numberOfPages}
            />
        </Layout>
    )
}

export const query = graphql `
    query BlogListQuery($skip: Int!, $limit: Int!){
        allMarkdownRemark(
            sort: {fields: frontmatter___date, order: DESC}, 
            limit: $limit, 
            skip: $skip) {
                edges {
                    node {
                        fields {
                            slug
                        }
                        frontmatter {
                            title
                            date(formatString: "MMM Do, YYYY")
                            author
                            id
                            shortDesc
                            image {
                                childImageSharp {
                                    fluid(maxWidth: 600, maxHeight: 630, quality: 100) {
                                        ...GatsbyImageSharpFluid
                                        presentationWidth
                                        presentationHeight
                                    }
                                }
                            }
                        }
                    }
                }
        }
    }
`;


export default BlogList;
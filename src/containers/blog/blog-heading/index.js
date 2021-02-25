import React from 'react';
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'

const BlogHeading = () => {
    const blogQueryData = useStaticQuery(graphql `
        query BlogHeadingQuery {
            pagedataJson(id: {eq: "blog_page_data"}) {
                title
                subtitle
            }
        }
    `);
    const blogSecData = blogQueryData.pagedataJson;
    return (
        <div className="col-1 offset-1">
            <SectionTitle
                subtitle={blogSecData.subtitle}
                title={blogSecData.title}
            />
        </div>
    )
}

export default BlogHeading;
import React from 'react';
import {Link} from 'gatsby'
import Image from '../image';
import {
    BlogWrapper, 
    Thumb, 
    Category, 
    Content, 
    ContentTop, 
    ContentBottom, 
    PostDate, 
    PostTitle,
    Excerpt,
    PostMeta
} from './blog.stc'

const Blog = ({title, date, author, path, image, excerpt}) => {
    return (
        <BlogWrapper>
            {image && (
                <Thumb>
                    <Link to={path}>
                        <Image fluid={image} alt={title}/>
                    </Link>
                    <Category>
                        <Link to={path}>Creative</Link>
                    </Category>
                </Thumb>
            )}
            <Content>
                <ContentTop>
                    <PostDate>{date}</PostDate>
                    <PostTitle><Link to={path}>{title}</Link></PostTitle>
                    <Excerpt>{excerpt}</Excerpt>
                </ContentTop>
                <ContentBottom>
                    <PostMeta>
                        <li><i className="ti-user"></i> <Link to={path}>{author}</Link></li>
                        <li><i className="ti-comment"></i><Link to={path}>39</Link></li>
                        <li><i className="ti-heart"></i><Link to={path}>305</Link></li>
                    </PostMeta>
                </ContentBottom>
            </Content>
        </BlogWrapper>
    )
} 

export default Blog;
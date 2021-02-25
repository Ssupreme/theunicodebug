import React from 'react';
import {Link} from 'gatsby'
import { CommentCount } from 'disqus-react';
import Image from '../../image';
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
 
const Blog = ({title, date, id, author, path, image, excerpt}) => {
    const disqusShortname = 'thern-1';
    const disqusConfig = {
        url: path,
        identifier: id,
        title: title,
    }; 
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
                        <li>
                            <Link to={path}>
                                <i className="ti-comment"></i>
                                <CommentCount shortname={disqusShortname} config={disqusConfig}/>
                            </Link>
                        </li>
                    </PostMeta>
                </ContentBottom>
            </Content>
        </BlogWrapper>
    )
} 

export default Blog;
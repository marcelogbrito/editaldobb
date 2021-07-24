import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js';
import { Box, Container, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

const components = {
    h1: props => <h1 style = {{ 
        fontSize: 'calc(1rem + 1.5vw)', 
        color: 'black',
        margin: '1vh 0 1vh 0', }} 
        {...props} />,

    p: props => <p style = {{ 
        fontSize: 'calc(1rem + 0.1vw)', 
        color: '#000000e6',
        margin: '0vh 0 1vh 0' }} 
        {...props} />,
}

export default function Blog({ postMetadata, postContent, id }) {
    const linkGitHub = `https://github.com/marcelogbrito/editaldobb/edit/main/conteudos/${id}.mdx`
    return (
        <>
        <Container>

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <MDXRemote {...postContent} components={components} />
      </VStack>
      <Link href={linkGitHub} isExternal>
      Edite esse artigo no Github <ExternalLinkIcon mx="2px" />
    </Link>
    </Container>
        </>
 
    )
}

export async function getStaticPaths() {
    const paths = getAllPostsPath();
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    const mdxSource = await serialize(postData.content)
    return {
        props: {
            postMetadata: postData.metadata,
            postContent: mdxSource,
            id: params.id,
        }
    }
}
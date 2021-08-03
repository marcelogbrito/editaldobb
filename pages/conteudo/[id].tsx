import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import { getAllPostsPath, getPostData } from '../../lib/getPostsData.js';
import { Box, Container, Flex, Link, VStack } from '@chakra-ui/react';
import React from 'react';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import Layout from '../../components/Layout';

const components = {
    h1: props => <h1 style = {{ 
        fontSize: 'calc(1rem + 1.5vw)', 
        margin: '1vh 0 1vh 0', }} 
        {...props} />,
        h2: props => <h2 style = {{ 
            fontSize: 'calc(0.7rem + 1.2vw)', 
            margin: '1vh 0 1vh 0', }} 
            {...props} />,
            h3: props => <h3 style = {{ 
                fontSize: 'calc(0.5rem + 0.8vw)', 
                margin: '1vh 0 1vh 0', }} 
                {...props} />,

    p: props => <p style = {{ 
        fontSize: 'calc(1rem + 0.1vw)', 
        margin: '0vh 0 1vh 0' }} 
        {...props} />,
}

export default function Blog({ postMetadata, postContent, id }) {
    const linkGitHub = `https://github.com/marcelogbrito/editaldobb/edit/main/conteudos/${id}.mdx`
    return (
        <>
        <Layout>

        <VStack paddingTop="40px" spacing="2" alignItems="flex-start">
        <Container maxW="container.lg">
        <MDXRemote {...postContent} components={components} />
        </Container>
        
      </VStack>
      <Flex justifyContent="center" mt={10}>
      <Link href={linkGitHub} isExternal>
      Ajude a melhorar este conteúdo! Edite no Github <ExternalLinkIcon mx="2px" />
    </Link>
    </Flex>
    </Layout>
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
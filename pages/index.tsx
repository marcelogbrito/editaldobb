import {
  Link as ChakraLink,
  Text,
  List,
  ListItem,
  ListIcon,
  Heading,
  Box,
  Flex,
  Icon,
  Badge,
  Stack
} from '@chakra-ui/react'
import {CheckCircleIcon, SearchIcon} from '@chakra-ui/icons'
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';

export default function Home({ postsData }) {
  return (
 
   
<>
<Flex>
  <Box><Heading>Edital do BB</Heading></Box>
  <Box><SearchIcon /> </Box>
</Flex>

<Flex>
<Text>Materiais de apoio relacionados ao concurso Banco do Brasil 2021</Text>
</Flex>


 

      
    
<Flex>
<List spacing={3}>
{postsData.map((metadata) => {
  return (
    <ListItem key = {metadata.id} >
      <Stack direction="row">
      <Badge>{metadata.tema}</Badge>
      </Stack>


      <Link href={`/blog/${metadata.id}`} key = {metadata.titulo} >
        
        <a className = 'post-title'><ListIcon as= {CheckCircleIcon} color="green.500" />{metadata.titulo}</a>
      </Link>
      
      
    </ListItem>
    )
  })}
  </List>
  </Flex>     
      

</>  

      
   
  )
}

export async function getStaticProps() {
  const postsData = getPostsMetaData();
  return {
    props: {
      postsData: postsData,
    }
  }
}
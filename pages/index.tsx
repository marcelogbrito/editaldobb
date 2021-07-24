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
  Stack,
  Stat,
  StatLabel,
  StatNumber,
  Button,
  Collapse,
  Input,
  useDisclosure
} from '@chakra-ui/react'
import {CheckCircleIcon, LinkIcon, SearchIcon} from '@chakra-ui/icons'
import Link from 'next/link';
import { getPostsMetaData } from '../lib/getPostsData.js';
import React from 'react';
import BarraNavegacao from '../components/BarraNavegacao';
import BarraEstatistica from '../components/BarraEstatistica';

export default function Home({ postsData }) {
  


  return (
 
   
<>
<BarraNavegacao />
<BarraEstatistica />
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
      <Badge>{metadata.nivel}</Badge>
      
     </Stack>
     <Stack direction="row">
     <Badge>{metadata.cargos}</Badge>
     </Stack>


      <Link href={`/conteudo/${metadata.id}`} key = {metadata.titulo} >
        
        <a className = 'post-title'><ListIcon as= {LinkIcon} color="green.500" />{metadata.titulo}</a>
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

function cargo(cargo: any): string | number | boolean | {} | import("react").ReactElement<any, string | import("react").JSXElementConstructor<any>> | import("react").ReactNodeArray | import("react").ReactPortal {
  throw new Error('Function not implemented.');
}

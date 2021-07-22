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

export default function Home({ postsData }) {
  const { isOpen, onToggle } = useDisclosure()
  const calculateTimeLeft = (mes, dia) => {
    let year = new Date().getFullYear();
    let difference = +new Date(`${mes}/${dia}/${year}`) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
    };
  }

  return timeLeft;

}
  return (
 
   
<>
<Flex>
  <Box><Heading>Edital do BB</Heading></Box>
  <Box> <Button onClick={onToggle}><SearchIcon /></Button>
      <Collapse in={isOpen} animateOpacity>
        <Box
          p="40px"
          mt="4"
          rounded="md"
          shadow="md"
        >
          <Input placeholder="Digite a sua busca" />
        </Box>
      </Collapse></Box>
</Flex>

<Flex>
<Stat>
  <StatLabel>Faltam</StatLabel>
  <StatNumber>{calculateTimeLeft(7,28)["days"]} dias</StatNumber>
  <StatLabel>para o término das inscrições</StatLabel>
</Stat>
<Stat>
  <StatLabel>Faltam</StatLabel>
  <StatNumber>{calculateTimeLeft(9,26)["days"]} dias</StatNumber>
  <StatLabel>para a data de realização da prova</StatLabel>
</Stat>
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

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
  useDisclosure,
  Container,
  SimpleGrid,
  HStack,
  VStack
} from '@chakra-ui/react'
import {CheckCircleIcon, CheckIcon, LinkIcon, SearchIcon} from '@chakra-ui/icons'
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

<Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Material de Apoio</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          Esse é um conteúdo de apoio ao concurso do BB 2021
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {postsData.map((materia) => (
            <HStack key={materia.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
              <Link href={`/conteudo/${materia.id}`} key = {materia.titulo} >
                <a><Text fontWeight={600}>{materia.titulo}</Text></a>
                </Link>
                <Text color={'gray.600'}>{materia.tema}</Text>
                {materia.cargos.map((cargo) => (
                  <Text color={'gray.600'}>{cargo}</Text>
                ))}
                
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
      

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

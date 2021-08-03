import { Box, chakra, Flex, SimpleGrid, Stat, StatLabel, StatNumber, useColorModeValue } from '@chakra-ui/react';
import React, { ReactNode } from 'react';
import { BsCalendar } from 'react-icons/bs';
interface StatsCardProps {
    title: string;
    stat: string;
    subtitulo: string;
    dataLimite: string;
    icon: ReactNode;
  }

  function StatsCard(props: StatsCardProps) {
    const { title, stat, subtitulo, dataLimite, icon } = props;
    return (
      <Stat
        px={{ base: 2, md: 4 }}
        py={'5'}
        shadow={'xl'}
        border={'1px solid'}
        borderColor={useColorModeValue('gray.800', 'gray.500')}
        rounded={'lg'}>
        <Flex justifyContent={'space-between'}>
          <Box pl={{ base: 2, md: 4 }}>
            <StatLabel fontWeight={'medium'} isTruncated>
              {title}
            </StatLabel>
            <StatNumber fontSize={'2xl'} fontWeight={'medium'}>
              {stat}
            </StatNumber>
            <StatLabel fontWeight={'medium'} isTruncated>
              {subtitulo}
            </StatLabel>
            <StatLabel fontWeight={'medium'} isTruncated>
              em {dataLimite}
            </StatLabel>
          </Box>
          <Box
            my={'auto'}
            color={useColorModeValue('gray.800', 'gray.200')}
            alignContent={'center'}>
            {icon}
          </Box>
        </Flex>
      </Stat>
    );
  }
  
const BarraEstatistica = () => {
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
        <Box maxW="7xl" mx={'auto'} pt={5} px={{ base: 2, sm: 12, md: 17 }}>
          <chakra.h1
            textAlign={'center'}
            fontSize={'4xl'}
            py={10}
            fontWeight={'bold'}>
            Avisos
          </chakra.h1>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 5, lg: 8 }}>


            <StatsCard
              title={'Faltam'}
              stat={calculateTimeLeft(8,7)["days"]}
              subtitulo={'dias para o término das inscrições'}
              dataLimite={'07/08/2021'}
              icon={<BsCalendar size={'3em'} />}
            />

            
<StatsCard
              title={'Faltam'}
              stat={calculateTimeLeft(9,26)["days"]}
              subtitulo={'dias para a prova do concurso'}
              dataLimite={'26/09/2021'}
              icon={<BsCalendar size={'3em'} />}
            />
          </SimpleGrid>
        </Box>
      );
};

export default BarraEstatistica;
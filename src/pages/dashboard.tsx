import { useState } from 'react'
import Head from 'next/head'
import { Flex, SimpleGrid, Box, Text } from '@chakra-ui/react'
import dynamic from 'next/dynamic'

import { options, series } from '../utils/chartsConfig';

import { Header } from '../components/Header'
import { Sidebar } from '../components/Sidebar'

const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false,
})

export default function Dashboard() {
  const [showChart, setShowChart] = useState(false);

  setTimeout(() => {
    setShowChart(true);
  }, 1);

  return (
    <>
      <Head>
        <title>Dashboard | Dashgo </title>
      </Head>

      <Flex direction='column' h='100vh'>
        <Header />

        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar />

          <SimpleGrid flex='1' gap='4' minChildWidth='320px' alignItems='flex-start'>
            <Box 
              p={['4', '8']} 
              bg='gray.800' 
              borderRadius={8} 
              pb='4'
            >
              <Text fontSize='lg' mb='4'>
                Inscritos da semana
              </Text>

              {showChart && (
                <Chart
                  options={options}
                  series={series}
                  type='area'
                  height={160}
                />
              )}
            </Box>

            <Box
              p={['4', '8']}
              bg='gray.800'
              borderRadius={8}
              pb='4'
            >
              <Text fontSize='lg' mb='4'>
                Taxa de abertura
              </Text>

              {showChart && (
                <Chart
                  options={options}
                  series={series}
                  type='area'
                  height={160}
                />
              )}
            </Box>
          </SimpleGrid>
        </Flex>
      </Flex>
    </>
  )
}

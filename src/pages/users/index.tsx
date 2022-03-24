import Head from 'next/head'
import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Checkbox,
  Thead,
  Th,
  Tbody,
  Tr,
  Td,
  Text,
} from '@chakra-ui/react'

import { Header } from '../../components/Header'
import { Sidebar } from '../../components/Sidebar'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

export default function UserList() {
  return (
    <>
      <Head>
        <title>Usuários | Dashgo</title>
      </Head>

      <Box>
        <Header />
        <Flex w='100%' my='6' maxWidth={1480} mx='auto' px='6'>
          <Sidebar />

          <Box flex='1' borderRadius={8} bg='gray.800' p='8'>
            <Flex mb='8' justify='space-between' align='center'>
              <Heading size='lg' fontWeight='normal'>
                Usuários
              </Heading>
              <Button
                as='a'
                size='sm'
                fontSize='sm'
                colorScheme='pink'
                cursor='pointer'
                leftIcon={<Icon as={RiAddLine} fontSize='20' />}
              >
                Criar novo
              </Button>
            </Flex>

            <Table colorScheme='whiteAlpha'>
              <Thead>
                <Tr>
                  <Th px='6' color='gray.300' width='8'>
                    <Checkbox colorScheme='pink' />
                  </Th>
                  <Th>Usuário</Th>
                  <Th>Data de cadastro</Th>
                  <Th width='8'></Th>
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td px='6'>
                    <Checkbox colorScheme='pink' />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Jeferson Fernandes</Text>
                      <Text fontSize='sm' color='gray.300'>
                        jfernandes.dev@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  <Td>24 de março, 2022</Td>

                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      cursor='pointer'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>


                <Tr>
                  <Td px='6'>
                    <Checkbox colorScheme='pink' />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Jeferson Fernandes</Text>
                      <Text fontSize='sm' color='gray.300'>
                        jfernandes.dev@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  <Td>24 de março, 2022</Td>

                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      cursor='pointer'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>


                <Tr>
                  <Td px='6'>
                    <Checkbox colorScheme='pink' />
                  </Td>

                  <Td>
                    <Box>
                      <Text fontWeight='bold'>Jeferson Fernandes</Text>
                      <Text fontSize='sm' color='gray.300'>
                        jfernandes.dev@gmail.com
                      </Text>
                    </Box>
                  </Td>

                  <Td>24 de março, 2022</Td>

                  <Td>
                    <Button
                      as='a'
                      size='sm'
                      fontSize='sm'
                      colorScheme='purple'
                      cursor='pointer'
                      leftIcon={<Icon as={RiPencilLine} fontSize='16' />}
                    >
                      Editar
                    </Button>
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </Box>
        </Flex>
      </Box>
    </>
  )
}

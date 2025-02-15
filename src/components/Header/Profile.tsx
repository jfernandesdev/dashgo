import { Box, Flex, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align='center'>
      {showProfileData && (
        <Box mr='4' textAlign='right'>
          <Text>Jeferson Fernandes</Text>
          <Text color='gray.300' fontSize='small'>
            jfernandes.dev@gmail.com
          </Text>
        </Box>
      )}

      <Avatar
        size='md'
        name='Jeferson Fernandes'
        src='https://github.com/jfernandesdev.png'
      />
    </Flex>
  )
}

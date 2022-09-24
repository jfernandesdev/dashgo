import Head from 'next/head'
import { useRouter } from 'next/router'
import { SubmitHandler, useForm } from 'react-hook-form'
import { Flex, Button, Stack } from '@chakra-ui/react'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

import { Input } from '../components/Form/Input'
import { string } from 'yup/lib/locale'

type SignInFormData = {
  email: string
  password: string
}

const signInFormSchema = yup.object().shape({
  email: yup.string().email('E-mail inválido').required('E-mail obrigatório'),
  password: yup.string().required('Senha obrigatória')
})

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
    defaultValues: {
      email: 'teste@teste.com',
      password: '123456'
    }
  })
  const { errors } = formState
  const router = useRouter();

  const handleSignIn: SubmitHandler<SignInFormData> = async values => {
    await new Promise(resolve => setTimeout(resolve, 2000))
    console.log(values)
    router.push('/dashboard');
  }

  return (
    <>
      <Head>
        <title>Login | Dashgo</title>
      </Head>

      <Flex w='100vw' h='100vh' align='center' justify='center'>
        <Flex
          as='form'
          width='100%'
          maxWidth={360}
          bg='gray.800'
          p='8'
          borderRadius={8}
          flexDirection='column'
          onSubmit={handleSubmit(handleSignIn)}
        >
          <Stack spacing='4'>
            <Input 
              type='email' 
              name='email' 
              label='E-mail' 
              {...register('email')}
              error={errors.email}
            />

            <Input 
              type='password' 
              name='password' 
              label='Senha' 
              {...register('password')}
              error={errors.password}
            />
          </Stack>

          <Button
            type='submit'
            mt='6'
            colorScheme='pink'
            size='lg'
            isLoading={formState.isSubmitting}
          >
            Entrar
          </Button>
        </Flex>
      </Flex>
    </>
  )
}

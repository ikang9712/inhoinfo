import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
// import VoxelDog from '../voxel-dog'
import NoSsr from '../no-ssr'
import VoxelDog from '../voxel-dog'
const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Inho's homepage" />
                <meta name="author" content="Inho Kang" />
                <link rel="apple-touch-icon" href="/images/inho.png" />
                <link rel="shortcut icon" href="/images/inho.png" type="image/x-icon" />
                <meta property="og:site_name" content="Inho Kang" />
                <meta name="og:title" content="Inho Kang" />
                <meta property="og:type" content="website" />
                <title>Inho Kang  - Homepage</title>
            </Head>
            
            <Navbar path={router.asPath} />
            <Box w="100%" pt={14}>
                <NoSsr>
                    <VoxelDog />
                    {/* <ThreeModel /> */}
                </NoSsr>
            </Box>
            
            <Container maxW="container.md" pt={130}>
                {children}
            </Container>
        </Box>
    )
}

export default Main
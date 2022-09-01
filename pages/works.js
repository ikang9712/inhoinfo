import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Button,
    Icon,
    Box,
    useToast
} from '@chakra-ui/react';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item'
import thumbmuselive from '../public/images/works/muse.jpg'
import thumbwebapp from '../public/images/works/webapp.png'
import thumbcmu from '../public/images/works/cmu.png'
import thumblemon from '../public/images/works/lemon.png'

import Layout from '../components/layouts/article';

//download
import {
    IoFileTrayFull,
  } from 'react-icons/io5'
  import { useColorModeValue } from '@chakra-ui/react';
  import NextLink from 'next/link'

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `


const Works = () => {
    const toast = useToast()
    const download = () => {
        try {
            window.location.href = "https://inhoinfotest.s3.amazonaws.com/testfile.docx"
            toast({
                title: 'Download completed!',
                description: "",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        } catch (error) {
            toast({
                title: 'Download failed!',
                description: "Someting went wrong. Please refresh your browser.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        }
    }
    return (
        <Layout>
        <Container>
            <Box align="center" my={4}>
                {/* <NextLink href='https://inhoinfotest.s3.amazonaws.com/testfile.docx' target='_blank'> */}
                    <Button 
                    leftIcon={<Icon as={IoFileTrayFull}/>} 
                    bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
                    onClick={download}
                    >
                    Download Full Resume
                    </Button>
                {/* </NextLink> */}
            </Box>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="muselive" title="museLIVE" thumbnail={thumbmuselive}>
                        Online live music performance app
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="cmu" title="cmu" thumbnail={thumbcmu}>
                        cmu TA
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="lemon" title="lemon" thumbnail={thumblemon}>
                        lemon healthcare
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
            <Section delay={0.2}>
                <Divider my={6} />

                <Heading as="h3" fontSize={20} mb={4}>
                School Works
                </Heading>
            </Section>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="webapp" title="Posts Mates" thumbnail={thumbwebapp}>
                        Note-taking web app using Quill.js
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
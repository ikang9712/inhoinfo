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
import thumbdata from '../public/images/works/data.png'

import Layout from '../components/layouts/article';

//download
import {
    IoFileTrayFull,
  } from 'react-icons/io5'
  import { useColorModeValue } from '@chakra-ui/react';



const Works = () => {
    const toast = useToast()
    const download = () => {
        try {
            window.open("https://inhoinfotest.s3.amazonaws.com/inhoinfo.pdf", "_blank")
            toast({
                title: 'Resume got downloaded.',
                description: "",
                status: 'success',
                duration: 3000,
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
        <Container pt={3}>
            <Box align="center" my={4}>
                    <Button 
                    leftIcon={<Icon as={IoFileTrayFull}/>} 
                    bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
                    onClick={download}
                    >
                    See the full resume
                    </Button>
                {/* </NextLink> */}
            </Box>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="muselive" title="museLIVE" thumbnail={thumbmuselive}>
                        Web app with real-time voice chat and virtual music concert
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
                    <WorkGridItem id="webapp" title="PostsMates" thumbnail={thumbwebapp}>
                        Social web app with rich text editor
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id="data" title="Data Visualizer" thumbnail={thumbdata}>
                        Image color analysis framework using computer vision
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
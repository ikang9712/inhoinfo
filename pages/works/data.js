import { Container, Badge, Link, List, ListItem, ListIcon, Heading, Center, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'


const Work = () => {
    return(
        <Layout title="data">
            <Container>
                <Title>
                    Data Visualizer <Badge>2021</Badge>
                </Title>
                <Box style={{backdropFilter:'blur(10px'}} pt={1}>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Intro </Center>
                </Heading>
                <Paragraph>
                    Data Visualizer is a color analysis framework that outputs color density profile of the input image.
                    Users can provide an external url or upload a local image file to see its profile.
                    We used 
                    <Link href='https://www.clarifai.com/' pl={1}>
                        Clarifai
                    </Link>
                    &apos;s computer vision API call for the color analysis.
                    
                    <Heading as="h4" fontSize={16} my={6}>
                        <Center> Summary </Center>
                    </Heading>
                    <List spacing={1} my={2}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            created data plugins to accept local files and external urls.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            created visualization plugins to output the color profile.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            incorporated Clarifai APIs to produce the profile.
                        </ListItem>
                    </List>
                </Paragraph>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Meta </Center>
                </Heading>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>Windows/macOS/Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, JavaScript/TypeScript  </span>
                    </ListItem>
                    <ListItem>
                        <Meta>Source</Meta>
                        <Link href='https://github.com/tlee0818/data-visualizer'>
                            Data Visualizer
                        </Link>
                    </ListItem>
                </List>
                <Section>
                    <WorkImage src="/images/works/data_img1.png" alt="data_img1" />
                    <WorkImage src="/images/works/data_img2.png" alt="data_img2" />
                </Section>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
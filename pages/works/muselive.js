import { Container, Badge, Link, List, ListItem, ListIcon, Heading, Center, SimpleGrid, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'


const Work = () => {
    return(
        <Layout title="museLIVE">
            <Container >
                <Title>
                    museLIVE <Badge>2022</Badge>
                </Title>
                <Box style={{backdropFilter:'blur(10px'}} pt={1}>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Intro </Center>
                    </Heading>
                <Paragraph>
                    <Link pr={1}
                    href="https://www.muse.live" target="_blank">
                        museLIVE
                    </Link>
                    is a web3 online live music platform where users can perform and mint their performances into NFTs (
                    <Link href="https://opensea.io/collection/muselive-official" target="_blank">
                        OpenSea link
                    </Link>
                    ).
                    Currently, they only support iOS(
                    <Link href="https://apps.apple.com/en/app/muselive-online-concerts/id1564042040" target="_blank">
                        AppStore link
                    </Link>
                    ).
                </Paragraph>
                <Paragraph>
                    I created a web application with online live performance and real-time voice chat features using React and Typescript.
                    (Below images are from Figma.)
                    <Heading as="h4" fontSize={16} my={6}>
                        <Center> Summary </Center>
                    </Heading>
                    <List spacing={1} my={2}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            built passwordless email signin/signup with JWT.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            enabled bi-directional, real-time communication between the web browser and mobile application with Socket and JWT.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            enabled real-time crossplatform voice chat with AgoraRTC.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            enabled online live streaming service with MUX.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            customized webpack configuration for bundling efficiency.
                        </ListItem>
                    </List>
                </Paragraph>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Meta </Center>
                </Heading>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Platform</Meta>
                        <span>iOS, Windows, macOS, Linux</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Stack</Meta>
                        <span>NodeJS, Typescript, React</span>
                    </ListItem>
                </List>
                <SimpleGrid columns={[1,1,2]} gap={6}>
                        <Section>
                            <WorkImage src="/images/works/muse_img1.png" alt="muse_img1" />
                        </Section>
                        <Section>
                            <WorkImage src="/images/works/muse_img2.png" alt="muse_img2" />
                        </Section>
                </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
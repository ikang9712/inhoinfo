import { Container, Badge, Link, List, ListItem, ListIcon, Heading, Center, SimpleGrid, Box } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'
import Section from '../../components/section'

const Work = () => {
    return(
        <Layout title="webapp">
            <Container>
                <Title>
                    PostsMates <Badge>2022</Badge>
                </Title>
                <Box style={{backdropFilter:'blur(10px'}} pt={1}>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Intro </Center>
                    </Heading>
                <Paragraph>
                    Collaborated with Mingun and created PostsMates, a social web application where users can create, upload and share their posts.
                    We incorporated Google OAuth for passwordless authorization process and Quill.js for dynamic text editor. This was a semester long project for 
                    <Link href="https://www.coursicle.com/cmu/courses/ISR/17437/" target="_blank" pl="1"> 
                        Web Application on Development 
                    </Link> 
                    .
                    <Heading as="h4" fontSize={16} my={6}>
                        <Center> Summary </Center>
                    </Heading>
                    <List spacing={1} my={2}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            removed registration process by incorporating Google OAuth.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            built inline editing toolbar using Quill.js
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            enabled users to align and change the size of image/video by clicking and dragging.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            deployed on AWS EC2/S3. Configured server, database, secrets with Apache, MySQL.
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
                        <span>NodeJS, HTML/CSS/JavaScript, jQuery, Python, Django, SQL </span>
                    </ListItem>
                               
                </List>
                <SimpleGrid columns={[1,1,1]} gap={6}>
                        <Section>
                            <WorkImage src="/images/works/webapp_img2.gif" alt="login"/>
                        </Section>
                        <Section>
                            <WorkImage src="/images/works/webapp_img1.gif" alt="create"/>
                        </Section>
                </SimpleGrid>
                </Box>
            </Container>
        </Layout>
    )
}

export default Work
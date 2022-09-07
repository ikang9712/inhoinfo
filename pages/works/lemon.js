import { Container, Badge, Link, List, ListItem, Heading, Center, ListIcon } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="webapp">
            <Container>
                <Title>
                    Lemon HealthCare <Badge>2020</Badge>
                </Title>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Intro </Center>
                    </Heading>
                <Paragraph>
                    <Link pr={1}
                    href="https://www.lemonhealthcare.com/" target="_blank">
                        Lemon HealthCare
                    </Link>
                    provides secure API gateway service for health data. 
                    It is the only private company that has an access to patient data of the hospitals in contract.
                </Paragraph>
                <Paragraph>
                    My role was to create an end-to-end API documents for both end users and developers. 
                    I worked closely with API developers in order for good documentation.
                    <Heading as="h4" fontSize={16} my={6}>
                        <Center> Summary </Center>
                    </Heading>
                    <List spacing={1} my={2}>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            filed use cases and created a user manual from scratch.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            wrote the references for +50 APIs regarding parameters, responses, and their usage.
                        </ListItem>
                        <ListItem>
                            <ListIcon as={CheckCircleIcon} color='green.500' />
                            collected statistical data points of user behavior with Amplitude and Google Analytics. 
                        </ListItem>
                    </List>
                    
                    

                </Paragraph>
                <Heading as="h4" fontSize={16} my={6}>
                        <Center> Meta </Center>
                </Heading>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Tool</Meta>
                        <span>Figma, Swagger </span>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work
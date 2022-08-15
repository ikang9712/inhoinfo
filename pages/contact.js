import {
    Container,
    Heading,
} from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import Layout from '../components/layouts/article';

const Contact = () => {
    return (
        <Layout>
            <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Contact
            </Heading>
            <p> This email will be sent to Inho's personal email!</p>
            </Container>
        </Layout>
    )
}

export default Contact
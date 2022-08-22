import {
    Container,
    Heading,
    SimpleGrid,
    Divider,
    Button,
    Icon,
    Link,
    Box,
    textDecoration
} from '@chakra-ui/react';
import Section from '../components/section';
import {WorkGridItem} from '../components/grid-item'
import thumbInkdrop from '../public/images/works/museicon.png'
import Layout from '../components/layouts/article';

//download
import {
    IoFileTrayFull,
  } from 'react-icons/io5'
  import { useColorModeValue } from '@chakra-ui/react';
  import styled from '@emotion/styled'
  import NextLink from 'next/link'

// const StyledLink = styled(Link)`
//     text-decoration: none;
//     &:focus, &:hover, &:visited, &:link, &:active {
//         text-decoration: none;
//     }
// `


const Works = () => {

    return (
        <Layout>
        <Container>
            <Box align="center" my={4}>
                <NextLink href='https://inhoinfotest.s3.amazonaws.com/testfile.docx' target='_blank'>
                    <Button 
                    leftIcon={<Icon as={IoFileTrayFull}/>} 
                    bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
                    >
                    Download Full Resume
                    </Button>
                </NextLink>
            </Box>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>
            <SimpleGrid columns={[1,1,2]} gap={6}>
                <Section>
                    <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbInkdrop}>
                        A markdown note-taking app
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
        </Layout>
    )
}

export default Works
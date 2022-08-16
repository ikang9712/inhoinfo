import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import Paragraph from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
    return(
        <Layout title="Inkdrop">
            <Container>
                <Title>
                    museLIVE <Badge>2022</Badge>
                </Title>
                <Paragraph>
                    A Markdown note-taking app with 111
                </Paragraph>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Website</Meta>
                        <Link href="https://www.muse.live">
                            https://www.muse.live <ExternalLinkIcon mx="2px"/>
                        </Link>
                    </ListItem>
                </List>
                {/* <WorkImage src="" alt="~~" /> */}
            </Container>
        </Layout>
    )
}

export default Work
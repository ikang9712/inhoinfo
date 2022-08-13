import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue, 
  Link,
  Button
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'

const Page = () => {
  return (
      <Container>
        <Box borderRadius = "lg" bg={useColorModeValue('#c3b091', 'whiteAlpha.200')} p={3} mb={5} align="center">
          Hello, I&apos;m a junior developer based in the U.S.!
        </Box>
        <Box display={{md:'flex'}}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Inho Kang
            </Heading>
            <p> Software Engineer </p>
          </Box>
          <Box 
          flexShrink={0} 
          mt={{base:4, md:0}} 
          ml={{md:6}} 
          align="center">
            <Image 
            borderColor="whiteAlpha.800" 
            borderWidth={2} 
            borderStyle="solid"
            maxWidth="100px"
            display="inline-block"
            borderRadius="full"
            src="/images/inho.png"
            alt="Profile Image"
             />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Inho is a freelance and a full passion for building digital services.
            He is very passionate in weed industry. His dream is to become a weed vendor in South Korea.
            Please check here {''}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button rightIcon={<ChevronRightIcon/>}>
                My portfolio 
              </Button>
            </NextLink>
          </Box>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Daegu (대구), South Korea
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from Culver Academies, Indiana
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Discharged from Korean military service, the 5th Artillery Brigade(제5포병여단)
          </BioSection>
          <BioSection>
            <BioYear>~Present</BioYear>
            Will complete my Bachelor&apos;s Degree in Statistics and Machine Learning at CMU(Carnegie Mellon University) in Spring 2023
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I Love 
          </Heading>
          <Paragraph>
            Music, Surfing, Workout, Good food, Ice cream
          </Paragraph>
        </Section>
      </Container>
  )
}

export default Page

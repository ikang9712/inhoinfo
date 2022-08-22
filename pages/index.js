import NextLink from 'next/link'
import { 
  Container, 
  Box, 
  Heading, 
  Image, 
  useColorModeValue, 
  Link,
  Button,
  List,
  ListItem,
  Icon,

} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoDiscord
} from 'react-icons/io5'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Contact from '../components/contact'

const socialButtonStyle = ""

const Page = () => {

  return (
    <Layout>
      <Container>
        {/* Header */}
        <Box borderRadius = "lg" bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')} p={3} mb={5} align="center">
          Hello, I&apos;m a software engineer based in the U.S.!
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

        {/* Work */}
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Inho is a freelance and a full passion for building digital services.
            put more body here
            Please check here {''}
            <NextLink href="/works/inkdrop">
              <Link>Inkdrop</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works">
              <Button
              bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
              rightIcon={<ChevronRightIcon/>}>
                My portfolio 
              </Button>
            </NextLink>
          </Box>
        </Section>

        {/* Bio */}
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1997</BioYear>
            Born in Daegu, South Korea
          </BioSection>
          <BioSection>
            <BioYear>2017</BioYear>
            Graduated from Culver Academies, Indiana
          </BioSection>
          <BioSection>
            <BioYear>2020</BioYear>
            Discharged from Korean military service, the 5th Artillery Brigade
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

        {/* Social Media */}
        <Section delay={0.3}>
          <Heading as ="h3" variant="section-title">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ikang9712/" target="_blank">
                <Button 
                _hover={{}}
                variant="ghost" textColor={useColorModeValue('#FE8D01', '#805AD5')} leftIcon={<Icon as={IoLogoGithub}/>}>
                  @ikang9712
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/inho-kang-6813261a8/" target="_blank">
                <Button 
                _hover={{}}
                variant="ghost" textColor={useColorModeValue('#FE8D01', '#805AD5')} leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  @inho-kang
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/inho#5759" target="_blank">
                <Button 
                _hover={{}}
                variant="ghost" textColor={useColorModeValue('#FE8D01', '#805AD5')} leftIcon={<Icon as={IoLogoDiscord}/>}>
                  @inho
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* Contact */}
          <Box align="center" my={4}>
            <Contact/>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

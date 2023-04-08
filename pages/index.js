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
import ThemeGlowBox from '../components/theme-glow-box'

const Page = () => {

  return (
    <Layout>
      <Container pt={3}>
        {/* Header */}
        <ThemeGlowBox fromColor={useColorModeValue('#63B3ED','#3a3a3a')} toColor={useColorModeValue('#BEE3F8','#5d5d5d')}>
          2023 Website renewal coming soon ...
        </ThemeGlowBox>
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
            About
          </Heading>
          <Paragraph>
          🙋‍♂️ Hello, I am a fullstack developer interested in machine learning and product development. I will be graduating with a Bachelor&apos;s degree in Statistics and Machine Learning this upcoming 2023 Spring.
          </Paragraph>
          <Paragraph>
          📚 Currently&#8212;during my senior year&#8212;I am assisting Professor Jeff Eppinger guide 100+ students to program end-to-end web applications utilizing the Django framework. The course encompasses a variety of topics from HTML/CSS/JS, XML, JQuery, database, security, all the way to cloud deployment, web services, and internationalization.
          </Paragraph>
          <Paragraph>
          💪 My most recent work involved creating a React/Typescript web application with real-time voice chat features incorporated into a live loseless audio streaming service. You can check out more details here:
            <NextLink href="/works/muselive">
              <Link > museLIVE</Link>
            </NextLink>
            .
          </Paragraph>
          <Paragraph>
            🤿 Recently, deep dive on Flutter, Dart to learn building a mobile app.
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
            Discharged from Korean military, 5th Artillery Brigade
          </BioSection>
          <BioSection>
            <BioYear>2023</BioYear>
            Graduated from Carengie Mellon University.
          </BioSection>
        </Section>

        {/* Courses */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
             Relavant Courses
          </Heading>
          <BioSection>
            <BioYear>17-437</BioYear>
              <Link 
              
              href="https://www.coursicle.com/cmu/courses/ISR/17437/" target="_blank"> 
              Web Application on Development 
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>17-303</BioYear>
              <Link 
              
              href="https://www.coursicle.com/cmu/courses/ISR/17303/" target="_blank"> 
              Cryptocurrencies, Blockchains, and Applications
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>15-351</BioYear>
              <Link 
              
              href="https://www.coursicle.com/cmu/courses/CS/15351/" target="_blank"> 
              Algorithms and Advanced Data Structures
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>36-402</BioYear>
              <Link 
              
              href="https://www.coursicle.com/cmu/courses/STA/36402/" target="_blank"> 
              Advanced Methods for Data Analysis
              </Link>
          </BioSection>
        </Section>

        {/* Social Media */}
        <Section delay={0.5}>
          <Heading as ="h3" variant="section-title">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ikang9712/" target="_blank">
                <Button 
                variant="ghost" text leftIcon={<Icon as={IoLogoGithub}/>}>
                  @ikang9712
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/inho-kang-6813261a8/" target="_blank">
                <Button 
                
                variant="ghost" text leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  @inho-kang
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/inho#5759" target="_blank">
                <Button 
                variant="ghost" text leftIcon={<Icon as={IoLogoDiscord}/>}>
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

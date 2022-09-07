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
      <Container>
        {/* Header */}
        <ThemeGlowBox fromColor={useColorModeValue('#FEB264','#3a3a3a')} toColor={useColorModeValue('#E77A7B','#5d5d5d')}>
          Actively Seeking for full time roles starting Summer 2023 😍
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
            🙋‍♂️ Hello, I am a fullstack web developer interested in machine learning and crypto. 
            I will be finishing my Bachelor's degree on Statistics and Machine Learning in 2023 Spring. 
          </Paragraph>
          <Paragraph>
            📚 During my senior year, I am assisting Professor Jeff Eppinger in guiding 100+ students to program end-to-end web application servers (HTML/CSS/JS, XML, Security, Cloud Deployment, etc). 

          </Paragraph>
          <Paragraph>
            💪 My most recent work was creating a React/Typescript web application with real-time voice chat and live loseless audio performance.
            You can check more details here: 
            <NextLink href="/works/muselive">
              <Link> museLIVE</Link>
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
            <BioYear>2014~2017</BioYear>
            Graduated from Culver Academies, Indiana
          </BioSection>
          <BioSection>
            <BioYear>2018~2020</BioYear>
            Discharged from Korean military, 5th Artillery Brigade
          </BioSection>
          <BioSection>
            <BioYear>2017~2023</BioYear>
            Will complete my Bachelor&apos;s Degree on Statistics and Machine Learning at CMU(Carnegie Mellon University) in Spring 2023
          </BioSection>
        </Section>

        {/* Courses */}
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
             Relavant Courses
          </Heading>
          <BioSection>
            <BioYear>17-437</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/ISR/17437/" target="_blank"> 
              Web Application on Development 
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>17-445</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/ISR/17445/" target="_blank"> 
              Machine Learning in Production
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>17-303</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/ISR/17303/" target="_blank"> 
              Cryptocurrencies, Blockchains, and Applications
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>17-336</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/ISR/17336/" target="_blank"> 
              Applied Distributed Systems
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>15-351</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/CS/15351/" target="_blank"> 
              Algorithms and Advanced Data Structures
              </Link>
          </BioSection>
          <BioSection>
            <BioYear>36-402</BioYear>
              <Link href="https://www.coursicle.com/cmu/courses/STA/36402/" target="_blank"> 
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
                variant="ghost" textColor={useColorModeValue('#4B56A3', '#DEBFD8')} leftIcon={<Icon as={IoLogoGithub}/>}>
                  @ikang9712
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/inho-kang-6813261a8/" target="_blank">
                <Button 
                
                variant="ghost" textColor={useColorModeValue('#4B56A3', '#DEBFD8')} leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  @inho-kang
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/inho#5759" target="_blank">
                <Button 
                variant="ghost" textColor={useColorModeValue('#4B56A3', '#DEBFD8')} leftIcon={<Icon as={IoLogoDiscord}/>}>
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

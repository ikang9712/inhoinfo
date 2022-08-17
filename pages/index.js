import NextLink from 'next/link'
import { useRef, useState, useEffect } from 'react'
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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Textarea
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import {
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoGithub,
  IoLogoLinkedin,
  IoMailOpenOutline,
  IoMailUnread,
  IoMailOpen,
  IoLogoDiscord
} from 'react-icons/io5'

const Page = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const initialRef = useRef(null)
  const finalRef = useRef(null)
  const [email, setEmail] = useState('')
  const [content, setContent] = useState('')
  const handleEmailChange = (e) => setEmail(e.target.value)
  const handleContentChange = (e) => setContent(e.target.value)
  const isError = email === ''

  const sendEmail = () => {
    console.log("send email")
    onClose()
    setEmail("")
    setContent("")
  }

  const closeEmail = () => {
    onClose()
    setEmail("")
    setContent("")
  }


  return (
    <Layout>
      <Container>
        {/* Header */}
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

        {/* Work */}
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

        {/* Bio */}
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

        {/* Social Media */}
        <Section delay={0.3}>
          <Heading as ="h3" variant="section-title">
            Contacts
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/ikang9712/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoGithub}/>}>
                  @ikang9712
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.linkedin.com/in/inho-kang-6813261a8/" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoLinkedin}/>}>
                  @inho-kang
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://www.discordapp.com/users/inho#5759" target="_blank">
                <Button variant="ghost" colorScheme="teal" leftIcon={<Icon as={IoLogoDiscord}/>}>
                  @inho
                </Button>
              </Link>
            </ListItem>
          </List>

          {/* Contact */}
          <Box align="center" my={4}>
            <Button 
            leftIcon={<Icon as={IoMailOpenOutline}/>} 
            colorScheme={"teal"}
            onClick={onOpen}>
              Contact Me!
            </Button>
            <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            initialFocusRef={initialRef}>
              <ModalOverlay />
              <ModalContent>
                <ModalHeader>Send email to Inho Kang</ModalHeader>
                <ModalCloseButton/>
                <ModalBody>
                <FormControl isRequired
                  isInvalid={isError}>
                  <FormLabel>Your Email</FormLabel>
                  <Input 
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  ref={initialRef} 
                  placeholder='Your Email' />
                  {!isError ? (
                    <FormHelperText>
                      Enter the sender's email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>

                <FormControl mt={4}>
                  <FormLabel>Content</FormLabel>
                  <Textarea 
                  value={content}
                  onChange={handleContentChange}
                  placeholder='Here is a sample placeholder'
                  size='sm'
                  />
                </FormControl>
                </ModalBody>
                <ModalFooter>
                  <Button colorScheme='blue' mr={3} onClick={sendEmail}>
                    Send Email
                  </Button>
                  <Button colorScheme='blue' mr={3} onClick={closeEmail}>
                    Close
                  </Button>
                </ModalFooter>
              </ModalContent>
            </Modal>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page

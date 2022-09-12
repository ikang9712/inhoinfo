import { useRef, useState } from 'react'
import { 
  Box, 
  Button,
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
  Textarea,
  useToast
} from '@chakra-ui/react'
import {
  IoDocumentTextOutline,
} from 'react-icons/io5'
import emailjs from '@emailjs/browser';
import { useColorModeValue } from '@chakra-ui/react';

const Contact = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')
    const [content, setContent] = useState('')
    const handleEmailChange = (e) => setEmail(e.target.value)
    const handleCompanyChange = (e) => setCompany(e.target.value)
    const handleContentChange = (e) => setContent(e.target.value)
    const isError = email === ''
    const serviceID = "service_df5xhs9"
    const templateID = "template_76y2jkb"
    const publicKey = "a_dCPqoyR2Rr37z20"
    const toast = useToast()

    const checkEmailFormat = () => {
        if (!email){
            toast({
                title: 'Please put your email address.',
                description: "",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
            return false
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)){
            toast({
                title: 'Email format is invalid',
                description: "",
                status: 'warning',
                duration: 9000,
                isClosable: true,
            })
            return false
        }
        return true
    }

    const sendEmail = async() => {
        if (!checkEmailFormat()){
            return
        }
        toast({
            title: 'Sending email right now!',
            description: "",
            status: 'loading',
            duration: 9000,
            id: "load"
          })
        const emailContent = document.createElement("form")
        emailContent.setAttribute("charset", "UTF-8")
        const fromEmail = document.createElement("input");
        fromEmail.setAttribute('name', 'from_email')
        fromEmail.setAttribute('value', email)
        const companyContent = document.createElement("input");
        companyContent.setAttribute('name', 'company')
        companyContent.setAttribute('value', company)
        const message = document.createElement("input");
        message.setAttribute('name', 'message')
        message.setAttribute('value', content)
        emailContent.appendChild(fromEmail)
        emailContent.appendChild(message)
        emailContent.appendChild(companyContent)
        await emailjs.sendForm(serviceID, templateID, emailContent, publicKey)
        .then((result)=> {
            toast.close("load")
            toast({
                title: 'Email has been sent successfully!',
                description: "Inho will reach out to you shortly :)",
                status: 'success',
                duration: 9000,
                isClosable: true,
            })
        }, (error) => {
          toast.close("load")
            toast({
                title: 'Error!',
                description: "Please try again after refreshing the browser.",
                status: 'error',
                duration: 9000,
                isClosable: true,
            })
        })
    
        closeEmail()
      }
    
      const closeEmail = () => {
        onClose()
        setEmail("")
        setContent("")
      }

    return (
        <Box align="center" my={4}>
            <Button 
            leftIcon={<Icon as={IoDocumentTextOutline}/>} 
            bg={useColorModeValue('whiteAlpha.800', 'whiteAlpha.200')}
            onClick={onOpen}>
              Contact me!
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
                <FormControl isRequired isInvalid={isError}>
                  <FormLabel>Your Email</FormLabel>
                  <Input 
                  type='email'
                  value={email}
                  onChange={handleEmailChange}
                  ref={initialRef}
                  variant={"flushed"}
                  placeholder='Enter your email here' />
                  {!isError ? (
                    <FormHelperText>
                      Enter the sender's email.
                    </FormHelperText>
                  ) : (
                    <FormErrorMessage>Email is required.</FormErrorMessage>
                  )}
                </FormControl>
                <FormControl>
                  <FormLabel>Company (optional)</FormLabel>
                  <Input 
                  type='company'
                  value={company}
                  onChange={handleCompanyChange}
                  variant={"flushed"}
                  placeholder='Enter company name here' />
                </FormControl>
                <FormControl mt={4}>
                  <FormLabel>Content</FormLabel>
                  <Textarea 
                  value={content}
                  onChange={handleContentChange}
                  placeholder=''
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
    )
}

export default Contact
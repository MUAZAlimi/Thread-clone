import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'
import { Button, useDisclosure } from '@chakra-ui/react'


const CreatePost = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
        <Button 
            position={"fixed"}
            botton={10}
            right={10}
            leftIcon={<AddIcon/>}
            bg={'gray'}
            onClick={onOpen}
        >
            Post
        </Button>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Text
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default CreatePost
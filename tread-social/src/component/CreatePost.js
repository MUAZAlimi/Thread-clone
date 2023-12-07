import { AddIcon } from "@chakra-ui/icons";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  Textarea,
  Text,
  Button, 
  useDisclosure,
  Input,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviewImg from "../hooks/usePreviewImg"
import {BsFillImageFill} from "react-icons/bs"

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const imageRef = useRef(null)
  const [postText, setPostText] = useState("")
  const {handleImageChange, imgUrl} = usePreviewImg()

  const handleTextChange = () => {

  }
  return (
    <>
      <Button
        pos={"fixed"}
        botton={10}
        right={10}
        leftIcon={<AddIcon />}
        bg={"gray"}
        onClick={onOpen}
      >
        Post
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create Post</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={6}>
            <FormControl>
              <Textarea
                placeholder="Post Content goes here"
                onChange={handleTextChange}
                value={postText}
              />
              <Text
                fontSize={"xs"}
                fontWeight={"bold"}
                textAlign={"right"}
                m={1}
                color={"gray.800"}
              >
                500/500
              </Text>
              <Input type="file" hidden ref={imageRef} onChange={handleImageChange} />

              <BsFillImageFill
                style={{marginLeft: "5px", cursor: "pointer"}}
                size={16}
                onClick={(() => imageRef.current.click)}
              />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

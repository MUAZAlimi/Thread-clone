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
  Flex,
  Image,
  CloseButton,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import usePreviewImg from "../hooks/usePreviewImg"
import {BsFillImageFill} from "react-icons/bs"

const MAX_CHAR = 500

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postText, setPostText] = useState("")
  const imageRef = useRef(null)
  const [remainingChar, setRemainingChar] = useState(MAX_CHAR)
  const {handleImageChange, imgUrl, setImgUrl} = usePreviewImg()

  const handleTextChange = (e) => {
    const inputText = e.target.value
    if(inputText.lenght > MAX_CHAR) {
       const truncatedText = inputText.slice(0, MAX_CHAR)
       setPostText(truncatedText)
       setRemainingChar(0)
    }else{
      setPostText(inputText)
      setRemainingChar(MAX_CHAR - inputText.length)
    }
  }
  const handleCreatePost = async () => {}
  return (
    <>
      <Button
        pos={"fixed"}
        bottom={10}
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
                {remainingChar}/{MAX_CHAR}
              </Text>
              <Input type="file" hidden ref={imageRef} onChange={handleImageChange} />

              <BsFillImageFill
                style={{marginLeft: "5px", cursor: "pointer"}}
                size={16}
                onClick={(() => imageRef.current.click())}
              />
            </FormControl>

              {imgUrl && (
                 <Flex
                   mt={"full"}
                   pos={"relative"}
                 >
                  <Image src={imgUrl} alt="Select image" />
                    <CloseButton 
                        onClick={() => {
                           setImgUrl("")
                        }}
                        bg={"gray.800"}
                        pos={"absolute"}
                        top={2}
                        right={2}
                    />
                 </Flex>
              )}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleCreatePost} isLoading={loading}>
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

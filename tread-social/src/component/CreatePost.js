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
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { useParams} from "react-router-dom";
import usePreviewImg from "../hooks/usePreviewImg";
import {useRecoilState, useRecoilValue} from "recoil"
import userAtom from "../atoms/userAtom"
import postsAtom from "../atoms/postsAtom"
import { BsFillImageFill } from "react-icons/bs";
import useShowToast from "../hooks/useShowToast";

const MAX_CHAR = 500;

const CreatePost = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [postText, setPostText] = useState("");
  const [posts, setPosts] = useRecoilState(postsAtom);
  const {username} = useParams()
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(null);
  const [remainingChar, setRemainingChar] = useState(MAX_CHAR);
  const { handleImageChange, imgUrl, setImgUrl } = usePreviewImg();
  const user = useRecoilValue(userAtom)
  const showToast = useShowToast()

  const handleTextChange = (e) => {
    const inputText = e.target.value;
    if (inputText.lenght > MAX_CHAR) {
      const truncatedText = inputText.slice(0, MAX_CHAR);
      setPostText(truncatedText);
      setRemainingChar(0);
    } else {
      setPostText(inputText);
      setRemainingChar(MAX_CHAR - inputText.length);
    }
  };
  const handleCreatePost = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/posts/create", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json"
        },
        body: JSON.stringify({postedBy: user._id, text: postText, img: imgUrl}),
      });
       const data = await res.json()
       if(data.error) {
         showToast("Error", data.error, "error")
         return;
       }

       showToast("Success", "Post Created Successfully", "success")
       if(username === user.username) {
        setPosts([data, ...posts]);
       }

       onClose()

       setPostText("")
       
    } catch (error) {
      showToast("Error", error, "error")
    }finally{
      setLoading(false)
    }
  };
  return (
    <>
      <Button
        pos={"fixed"}
        bottom={10}
        right={10}
        bg={useColorModeValue("gray.300", "gray.dark")}
        onClick={onOpen}
        size={{base: "sm", sm:"lg"}}
      >
        <AddIcon />
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
              <Input
                type="file"
                hidden
                ref={imageRef}
                onChange={handleImageChange}
              />

              <BsFillImageFill
                style={{ marginLeft: "5px", cursor: "pointer" }}
                size={16}
                onClick={() => imageRef.current.click()}
              />
            </FormControl>

            {imgUrl && (
              <Flex mt={"full"} pos={"relative"}>
                <Image src={imgUrl} alt="Select image" />
                <CloseButton
                  onClick={() => {
                    setImgUrl("");
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
            <Button
              colorScheme="blue"
              mr={3}
              onClick={handleCreatePost}
              isLoading={loading}
            >
              Post
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default CreatePost;

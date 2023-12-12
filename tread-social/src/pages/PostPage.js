import {
  Avatar,
  Box,
  Button,
  Divider,
  Flex,
  Image,
  Spinner,
  Text,
} from "@chakra-ui/react";
import React, { useState, useEffect } from "react";
import { BsThreeDots } from "react-icons/bs";
import Actions from "../component/Actions";
import Comments from "../component/Comments";
import useGetUserProfile from "../hooks/useGetUserProfile";
import useShowToast from "../hooks/useShowToast";
import { useParams } from "react-router-dom";

const PostPage = () => {
  const {user, loading} = useGetUserProfile()
  const [post, setPost] = useState(null)
  const showToast = useShowToast()
  const {pid} = useParams()

  useEffect(() => {
    const getPost = async () => {
        try {
           const res = await fetch(`/api/posts/user/${pid}`)
           const data = await res.json()
           if (data.error) {
            showToast("Error", data.error, "error")
            return
           }
           console.log(data)
           setPost(data)
        } catch (error) {
           showToast("Error", error.message, "error")
        }
    }
    getPost()
  }, [])
  

    if(!user && loading) {
      return (
        <Flex justifyContent={"center"}>
          <Spinner  size={"xl"}/>
        </Flex>
      )
    }
  
  return (
    <>
      <Flex
        w={"full"}
        gap={3}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Flex alignItems={"center"}>
          <Avatar src={user.profilePic} name="Alimi Muaz" size={"md"} mr={2} />
          <Text fontSize={"sm"}>{user.username}</Text>
          <Image src="/verified.png" h={4} w={4} ml={2} />
        </Flex>
        <Flex alignItems={"center"} gap={4}>
          <Text
            fontSize={{ base: "xs", md: "sm" }}
            textAlign={"right"}
            w={36}
            color={"gray.light"}
          >
            2day
          </Text>
          <BsThreeDots />
        </Flex>
      </Flex>

      <Text my={3}>Hello gbogbo aye!!!</Text>

      <Box
        overflow={"hidden"}
        borderRadius={6}
        border={"1px solid"}
        borderColor={"gray.light"}
      >
        <Image src="/post1.png" width={"full"} />
      </Box>
      <Flex>
        <Actions liked={liked} setLiked={setLiked} />
      </Flex>
      <Flex gap={2} color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
        <Text>20 replies</Text>
        <Box w={0.5} h={0.5} bg={"gray.light"} borderRadius={"full"}></Box>
        <Text>{21 + (liked ? 1 : 0)} likes</Text>
      </Flex>

      <Divider my={4} />
      <Flex justifyContent={"space-between"}>
        <Flex alignItems={"center"} gap={2}>
          <Text fontSize={"2xl"}>👋</Text>
          <Text color={"gray.light"}>Get the app to like, reply and post.</Text>
        </Flex>
        <Button>Get</Button>
      </Flex>
      <Divider my={4} />

      {/* <Comments
        comment={"This is amazing"}
        createdAt={"2 min ago"}
        userAvater={"https://bit.ly/ryan-florence"}
        likes={12}
        username={"JohnDoe"}
      /> */}
      {/* <Comments
        comment={" This is an amazing post. Thanks for the update"}
        userAvater={"/directorPro.jpeg"}
        createdAt={"5 min ago"}
        likes={13}
        username={"Aliumusa"}
      />
      <Comments
        comment={"Hello World!"}
        createdAt={"10 min ago"}
        userAvater={"https://bit.ly/ryan-florence"}
        likes={18}
        username={"Muha"}
      /> */}
    </>
  );
};

export default PostPage;

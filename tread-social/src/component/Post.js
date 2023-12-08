import {
  Flex,
  Avatar,
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuGroup,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsThreeDots } from "react-icons/bs";
import Actions from "./Actions";
import useShowToast from "../hooks/useShowToast";

const Post = ({ post, postedBy }) => {
  const [liked, setLiked] = useState(false);
  const [user, setUser] = useState(null)
  const showToast = useShowToast()
  useEffect(() => {
    const getUser = async () => {
        try {
          const res = await fetch(`/api/users/profile/${postedBy}`)
          const data = await res.json()
          console.log(data)
          setUser(data)
          if(data.error) {
            showToast("Error", data.error, "error");
            return
          }
        } catch (err) {
          showToast("Error", err.message, "error");
          setUser(null)
        } 
    }
    getUser()
  }, [postedBy, showToast])

  if(!user) return null;
  
  return (
    <Link to={"/:aliumusa/post/:1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex alignItems={"center"} flexDir={"column"}>
          <Avatar src="/directorPro.jpeg" size={"md"} name={user.name} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box pos={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              size={"xs"}
              name="Wale Oloyin"
              pos={"absolute"}
              top={"0"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              size={"xs"}
              name="Bella Sh,urda"
              pos={"absolute"}
              bottom={"0"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              size={"xs"}
              name="Mark Danfo Driver"
              pos={"absolute"}
              bottom={"0"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex justifyContent={"space-between"} w={"full"} flex={1}>
            <Flex alignItems={"center"} w={"full"}>
              <Text>{user.name}</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>
            <Flex
              alignItems={"center"}
              gap={4}
              onClick={(e) => e.preventDefault()}
            >
              <Text color={"gray.light"}>1day</Text>
              <Menu>
                <MenuButton>
                  <BsThreeDots cursor={"pointer"} />
                </MenuButton>
                <MenuList>
                  <MenuGroup>
                    <MenuItem color={"gray.light"}>Mute</MenuItem>
                    <MenuDivider />
                    <MenuItem color={"red"}>Block</MenuItem>
                    <MenuDivider />
                    <MenuItem color={"gray.light"}>Hide</MenuItem>
                    <MenuDivider />
                    <MenuItem color={"red"}>Report</MenuItem>
                  </MenuGroup>
                </MenuList>
              </Menu>
            </Flex>
          </Flex>
          <Text>{post.text}</Text>
          {post.img && (
            <Box
              borderRadius={6}
              overflow={"hidden"}
              border={"1px solid"}
              borderColor={"gray.light"}
            >
              <Image src={post.img} width={"full"} />
            </Box>
          )}

          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
          <Flex
            color={"gray.light"}
            gap={2}
            fontSize={"sm"}
            alignItems={"center"}
          >
            <Text>{post.replies.length} replies</Text>
            <Box w={0.5} h={0.5} bg={"gray.light"}></Box>
            <Text>{post.likes.length} likes</Text>
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Post;

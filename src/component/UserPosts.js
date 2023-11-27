import { Avatar, Box, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";
import { Link } from "react-router-dom";
import Actions from "./Actions";
import { useState } from "react";

const UserPosts = ({likes, replies, postTitle, postImg}) => {
    const [liked, setLiked] = useState(false)
  return (
    <Link to={"/yungalimzy/post/1"}>
      <Flex gap={3} mb={4} py={5}>
        <Flex flexDir={"column"} alignItems={"center"}>
          <Avatar src="/post1.png" name="Mark Zuckerberg" size={"md"} />
          <Box w={"1px"} h={"full"} bg={"gray.light"} my={2}></Box>
          <Box pos={"relative"} w={"full"}>
            <Avatar
              src="/post1.png"
              name="Wale Oloyin"
              size={"xs"}
              pos={"absolute"}
              top={"0"}
              left={"15px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Bella Shmurda"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              right={"-5px"}
              padding={"2px"}
            />
            <Avatar
              src="/post1.png"
              name="Danfo Driver"
              size={"xs"}
              pos={"absolute"}
              bottom={"0"}
              left={"4px"}
              padding={"2px"}
            />
          </Box>
        </Flex>
        <Flex flex={1} flexDir={"column"} gap={2}>
          <Flex w={"full"} justifyContent={"space-between"}>
            <Flex alignItems={"center"} w={"full"}>
              <Text>AlimiMuaz</Text>
              <Image src="/verified.png" ml={1} w={4} h={4} />
            </Flex>
            <Flex alignItems={"center"} gap={4}>
              <Text color={"gray.light"}>1d</Text>
              <BsThreeDots />
            </Flex>
          </Flex>
          <Text fontSize={"sm"}>{postTitle}</Text>
          <Box
            borderRadius={6}
            overflow={"hidden"}
            border={"1px solid"}
            borderColor={"gray.light"}
          >
            <Image src={postImg} w={"full"} />
          </Box>
          <Flex>
            <Actions liked={liked} setLiked={setLiked} />
          </Flex>
            <Flex gap={2}  color={"gray.light"} fontSize={"sm"} alignItems={"center"}>
                <Text>{replies} replies</Text>
                <Box w={0.5} h={0.5} borderRadius={"full"} bg={"gray.light"}></Box>
                <Text>{likes} likes</Text>
            </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default UserPosts;

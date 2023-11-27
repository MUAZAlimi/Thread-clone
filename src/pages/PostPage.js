import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import { BsThreeDots } from "react-icons/bs";

const PostPage = () => {
  return (
    <>
        <Flex
          w={"full"}
          gap={3}
          alignItems={"center"}
          justifyContent={""}
        >
          <Flex alignItems={"center"}>
          <Avatar src="/aliumusa.jpeg" name="Alimi Muaz" size={"md"} mr={2} />
            <Text fontSize={"sm"}>Alimi Muaz</Text>
            <Image src="/verified.png" h={4} w={4} ml={2} />
          </Flex>
          <Flex alignItems={"center"}>
            <Text fontSize={{base: "xs", md: "sm"}} textAlign={"right"} w={36} color={"gray.light"}>
              2d
            </Text>
            <BsThreeDots />
          </Flex>
        </Flex>
    </>
  );
};

export default PostPage;

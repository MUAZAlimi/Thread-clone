import { Box, Flex, VStack, Text, Link } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";
import { CgMoreO } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Alimi Muaz .O
          </Text>
          <Flex gap={2} align={"center"}>
            <Text fontSize={"sm"}>yungalimzy123</Text>
            <Text
              fontSize={"xm"}
              bg={"gray.dark"}
              color={"gray.light"}
              p={1}
              borderRadius={"full"}
            >
              thread.net
            </Text>
          </Flex>
        </Box>

        <Box>
          <Avatar name="Alimi Muaz" src="/directorPro.jpeg" size={"xl"} />
        </Box>
      </Flex>

      <Text>FrontEnd developer of DltAfrica Chort 3.0</Text>
      <Flex w={"full"} justifyContent={"space-between"}>
        <Flex gap={2} alignItems={"center"}>
          <Text color={"gray.light"}>4.5m followers</Text>
          <Box w={1} h={1} bg={"gray.light"} borderRadius="50%"></Box>
          <Link color={"gray.light"}>instagram.com</Link>
        </Flex>
        <Flex gap={2}>
          <Box className="icon-container">
            <BsInstagram size={24} cursor={"pointer"} />
          </Box>
          <Box className="icon-container">
            <CgMoreO size={24} cursor={"pointer"} />
          </Box>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;

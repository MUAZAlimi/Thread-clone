import { Box, Flex, VStack, Text, Link } from "@chakra-ui/layout";
import { Avatar, useToast } from "@chakra-ui/react";
import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Portal } from "@chakra-ui/portal";
import { CgMoreO } from "react-icons/cg";
import { BsInstagram } from "react-icons/bs";

const UserHeader = () => {
  const toast = useToast();

  const copyURL = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL).then(() => {
      toast({
        title: "Success",
        description: "Profile link copied",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    });
  };

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
          <Avatar
            name="Alimi Muaz"
            src="/directorPro.jpeg"
            size={{ base: "md", md: "xl" }}
          />
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
            <Menu>
              <MenuButton>
                <CgMoreO size={24} cursor={"pointer"} />
              </MenuButton>
              <Portal>
                <MenuList bg={"gray.dark"}>
                  <MenuItem bg={"gray.dark"} color={"white"} onClick={copyURL}>
                    Copy Link
                  </MenuItem>
                </MenuList>
              </Portal>
            </Menu>
          </Box>
        </Flex>
      </Flex>

      <Flex w={"full"}>
        <Flex
          flex={1}
          borderBottom={"1.5px solid white"}
          justifyContent={"center"}
          pb={"3"}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Thread</Text>
        </Flex>
        <Flex
          flex={1}
          borderBottom={"1px solid gray"}
          justifyContent={"center"}
          pb={"3"}
          color={"gray.light"}
          cursor={"pointer"}
        >
          <Text fontWeight={"bold"}>Replies</Text>
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UserHeader;

import { Box, Flex, VStack, Text } from "@chakra-ui/layout";
import { Avatar } from "@chakra-ui/react";

const UserHeader = () => {
  return (
    <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
          <Text fontSize={"2xl"} fontWeight={"bold"}>
            Alimi Muaz
          </Text>
          <Flex gap={2} align={"center"}>
            <Text fontSize={"sm"}>yungalimzy123</Text>
            <Text fontSize={"xm"} bg={"gray.dark"} color={"gray.light"} p={1} borderRadius={"full"}>thread.net</Text>
          </Flex>
        </Box>

        <Box>
            <Avatar 
            name="Alimi Muaz"
            src="/directorPro.jpeg"
            size={"xl"}/>
        </Box>
      </Flex>

            <Text>FrontEnd developer of DltAfrica Chort 3.0</Text>
            <Flex w={"full"} justifyContent={"space-between"}>
                <Flex gap={2} alignItems={"center"}>
                    
                </Flex>
            </Flex>
    </VStack>
  );
};

export default UserHeader;

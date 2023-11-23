import { Box, Flex, VStack,Text } from "@chakra-ui/layout";

const UserHeader = () => {
  return <VStack gap={4} alignItems={"start"}>
      <Flex justifyContent={"space-between"} w={"full"}>
        <Box>
            <Text>Alimi Muaz</Text>
        </Box>
      </Flex>
    </VStack>
};

export default UserHeader;

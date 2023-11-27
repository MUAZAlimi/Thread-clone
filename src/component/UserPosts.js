import { Avatar } from "@chakra-ui/avatar";
import { Flex } from "@chakra-ui/layout";
import { Link } from "react-router-dom";

const UserPosts = () => {
  return (
    <Link to={"/yungalimzy/post/1"}>
      <Flex>
        <Flex>
            <Avatar></Avatar>    
        </Flex>        
      </Flex>
    </Link>
  )
}

export default UserPosts

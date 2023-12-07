import { Flex, Image, useColorMode, Link } from "@chakra-ui/react";
import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { AiFillHome } from "react-icons/ai";
import { RxAvatar } from "react-icons/rx";
import { Link as RouterLink } from "react-router-dom";
// import RxAvater from "./RxAvater"

const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const user = useRecoilValue(userAtom);

  return (
    <Flex justifyContent={"center"} mt={6} mb="12" gap={100}>
      {user && (
        <Link as={RouterLink} to="/" >
          <AiFillHome size={24}gap={3} />
        </Link>
      )}

      {/* {!user && (
        <Link as={RouterLink} to="/auth" onClick={() => setAuthScreen("login")}>
          Login
        </Link>
      )} */}
      <Image
        cursor="pointer"
        alt="logo"
        w={6}
        src={colorMode === "dark" ? "/light-logo.svg" : "/dark-logo.svg"}
        onClick={toggleColorMode}
      />

      {user && (
        <Link as={RouterLink} to={`/${user.username}`} >
          <RxAvatar size={24} />
        </Link>
      )}
    </Flex>
  );
};

export default Header;

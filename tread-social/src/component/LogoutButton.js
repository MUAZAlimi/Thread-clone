import { Button } from "@chakra-ui/react";
import { AiOutlineLogout } from "react-icons/ai";

const LogoutButton = () => {
  return (
    <Button position={"fixed"} top={"30px"} right={"30px"} size={"sm"}>
      <AiOutlineLogout size={20} />
    </Button>
  );
};

export default LogoutButton;

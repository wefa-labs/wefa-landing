import { memo, useEffect, useContext } from "react";

import { useRouter } from "next/router";

import { Box, ChakraProps, Container } from "@chakra-ui/react";

import {
  ModalAccountActions,
  ModalAccountCtx,
} from "@definitions/context/modal.account";

import Navbar from "@components/navbar/navbar-default";

import ModalAccount from "@blocks/modal/account";

import { IHeader } from "./header";

const Header: React.FC<IHeader.IProps> = ({
  isDark = false,
  isSticky = false,
}) => {
  const {
    state, // eslint-disable-line @typescript-eslint/no-unused-vars
    dispatch,
  } = useContext(ModalAccountCtx);
  const router = useRouter();
  const { modal } = router.query;
  const sticky: ChakraProps = isSticky
    ? {
        zIndex: "sticky",
        w: "full",
        pos: "absolute",
        bg: "transparent",
      }
    : {};

  useEffect(() => {
    if (modal === "account") {
      dispatch({ type: ModalAccountActions.OPEN });
    }
  }, [modal]);

  return (
    <Box py={1} {...sticky}>
      <Container data-testid="container" maxW="container.xl">
        <Navbar isDark={isDark} />
      </Container>
      <ModalAccount />
    </Box>
  );
};

export default memo(Header);

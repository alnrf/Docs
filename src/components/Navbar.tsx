import {
  Box,
  Container,
  Flex,
  HStack,
  IconButton,
  Link as ChakraLink,
  useColorMode,
  useColorModeValue,
  Text,
} from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { navigationLinks } from "../utils/utils";

export const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue("gray.50", "gray.900");
  const border = useColorModeValue("gray.200", "gray.700");
  const location = useLocation();

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <ChakraLink
      as={Link}
      to={to}
      px={3}
      py={2}
      rounded="md"
      fontWeight={location.pathname === to ? "bold" : "medium"}
      _hover={{
        textDecoration: "none",
        bg: useColorModeValue("gray.200", "gray.700"),
      }}
    >
      {label}
    </ChakraLink>
  );

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={10}
      bg={bg}
      borderBottom="1px solid"
      borderColor={border}
    >
      <Container maxW="container.xl" py={2}>
        <Flex align="center" justify="space-between">
          <HStack spacing={3}>
            {navigationLinks.map((link) => (
              <NavLink key={link.to} to={link.to} label={link.label} />
            ))}
          </HStack>
          <HStack spacing={3}>
            <IconButton
              aria-label="Toggle color mode"
              onClick={toggleColorMode}
              icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              variant="ghost"
            />
            <Text fontSize={{ base: "md", md: "lg" }}>Sair</Text>
          </HStack>
        </Flex>
      </Container>
    </Box>
  );
};

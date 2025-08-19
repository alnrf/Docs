import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function UserDashboard() {
  return (
    <Box minH="100vh">
      <Container
        maxW={{ base: "container.sm", md: "container.lg", xl: "container.xl" }}
        py={{ base: 6, md: 10 }}
      >
        <Stack spacing={6}>
          <Heading as="h1" size={{ base: "lg", md: "xl" }}>
            Dashboard - Cliente
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Esta página ocupa 100% da altura da tela e permite rolagem.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}

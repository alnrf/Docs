import React from "react";
import { Box, Container, Heading, Stack, Text, VStack } from "@chakra-ui/react";

export default function FilesUpload() {
  return (
    <Box minH="100vh">
      <Container
        maxW={{ base: "container.sm", md: "container.lg", xl: "container.xl" }}
        py={{ base: 6, md: 10 }}
      >
        <Stack spacing={6}>
          <Heading as="h1" size={{ base: "lg", md: "xl" }}>
            Carregamento de Arquivos
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Esta página ocupa 100% da altura da tela e permite rolagem.
          </Text>

          <VStack align="stretch" spacing={4}>
            <Box
              p={{ base: 4, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              shadow="sm"
            >
              <Heading as="h2" size="md" mb={2}>
                Arquivo
              </Heading>
              <Text>Conteúdo de exemplo adaptável ao tamanho da tela.</Text>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

import {
  Box,
  Button,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Home() {
  const [blocks, setBlocks] = useState<number>(3);

  return (
    <Box minH="100vh">
      <Container
        maxW={{ base: "container.sm", md: "container.lg", xl: "container.xl" }}
        py={{ base: 6, md: 10 }}
      >
        <Stack spacing={6}>
          <Heading as="h1" size={{ base: "lg", md: "xl" }}>
            Página Inicial
          </Heading>
          <Text fontSize={{ base: "md", md: "lg" }}>
            Esta página ocupa 100% da altura da tela e permite rolagem.
          </Text>
          <Button onClick={() => setBlocks((b) => b + 1)}>
            Adicionar bloco
          </Button>
          <VStack align="stretch" spacing={4}>
            {Array.from({ length: blocks }).map((_, i) => (
              <Box
                key={i}
                p={{ base: 4, md: 6 }}
                rounded="xl"
                borderWidth="1px"
                shadow="sm"
              >
                <Heading as="h2" size="md" mb={2}>
                  Bloco {i + 1}
                </Heading>
                <Text>Conteúdo de exemplo adaptável ao tamanho da tela.</Text>
              </Box>
            ))}
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

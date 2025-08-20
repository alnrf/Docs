import React from "react";
import { Box, Container, Heading, Stack, Text, VStack } from "@chakra-ui/react";
import { Radio, RadioGroup } from "@chakra-ui/react";

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
                Documento de Identificação
              </Heading>
              <Text>Conteúdo de exemplo adaptável ao tamanho da tela.</Text>
              {/* Seletores (radio) adicionados abaixo */}
              <RadioGroup defaultValue="rg" mt={4}>
                <Stack direction="row" spacing={6}>
                  <Radio value="rg">RG</Radio>
                  <Radio value="e_cnh">CNH Digital</Radio>
                  <Radio value="cnh">CNH Impressa</Radio>
                </Stack>
              </RadioGroup>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

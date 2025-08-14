import { Container, Heading, Text, Stack } from "@chakra-ui/react";

export default function About() {
  return (
    <Container maxW="container.md" py={{ base: 8, md: 12 }}>
      <Stack spacing={4}>
        <Heading>Sobre</Heading>
        <Text>Página de exemplo. Adicione novas rotas no AppRoutes.tsx.</Text>
      </Stack>
    </Container>
  );
}

import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Text,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const emailError = submitted && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const passwordError = submitted && password.length < 6;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!emailError && !passwordError) {
      alert(`Login com sucesso!\\nEmail: ${email}`);
    }
  };

  return (
    <Container maxW="container.sm" py={{ base: 10, md: 16 }}>
      <Box borderWidth="1px" rounded="2xl" p={{ base: 6, md: 8 }} shadow="sm">
        <Stack spacing={6}>
          <Heading size={{ base: "lg", md: "xl" }}>Entrar</Heading>
          <Text>Use seu e-mail e senha para acessar.</Text>

          <Box as="form" onSubmit={onSubmit}>
            <Stack spacing={5}>
              <FormControl isInvalid={emailError}>
                <FormLabel>E-mail</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailError && (
                  <FormErrorMessage>Informe um e-mail válido.</FormErrorMessage>
                )}
              </FormControl>
              <FormControl isInvalid={passwordError}>
                <FormLabel>Senha</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordError && (
                  <FormErrorMessage>Senha muito curta.</FormErrorMessage>
                )}
              </FormControl>
              <Button type="submit">Entrar</Button>
            </Stack>
          </Box>
        </Stack>
      </Box>
    </Container>
  );
}

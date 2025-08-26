import React, { useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  VStack,
  Radio,
  RadioGroup,
  Checkbox,
  Link,
} from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function FilesUpload() {
  const [docType, setDocType] = useState("rg");
  const [noCpf, setNoCpf] = useState(false);

  // Helper to render file inputs
  const renderFileInputs = () => {
    if (docType === "rg") {
      return (
        <>
          <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
            <Box>
              <Text fontSize="sm" mb={1}>
                Frente (ou documento aberto)
              </Text>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                style={{ display: "block" }}
              />
            </Box>
            <Box>
              <Text fontSize="sm" mb={1}>
                Verso
              </Text>
              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                style={{ display: "block" }}
              />
            </Box>
          </Stack>
          <Checkbox
            mt={4}
            isChecked={noCpf}
            onChange={(e) => setNoCpf(e.target.checked)}
          >
            Meu RG não possui CPF
          </Checkbox>
          {noCpf && (
            <Stack
              direction={{ base: "column", md: "row" }}
              spacing={4}
              mt={2}
              justifyContent={{ base: "flex-start", md: "space-between" }}
              alignItems="center"
            >
              <Box mt={4}>
                <Text fontSize="sm" mb={1}>
                  Selecione o arquivo do comprovante de CPF
                </Text>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  style={{ display: "block" }}
                />
              </Box>
              <Box mt={4}>
                <Text fontSize="sm" mb={1}>
                  <Link
                    href="https://servicos.receita.fazenda.gov.br/Servicos/CPF/ImpressaoComprovante/ConsultaImpressao.asp"
                    target="_blank"
                    color="teal.500"
                    rel="noopener noreferrer"
                    _hover={{ textDecoration: "none" }}
                  >
                    Comprovante de Inscrição no CPF
                    <ExternalLinkIcon mx="2px" ml={2} />
                  </Link>
                </Text>
              </Box>
            </Stack>
          )}
        </>
      );
    }
    if (docType === "cnh") {
      return (
        <Stack direction={{ base: "column", md: "row" }} spacing={4} mt={4}>
          <Box>
            <Text fontSize="sm" mb={1}>
              Frente (ou documento aberto)
            </Text>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              style={{ display: "block" }}
            />
          </Box>
          <Box>
            <Text fontSize="sm" mb={1}>
              Verso
            </Text>
            <input
              type="file"
              accept=".jpg,.jpeg,.png,.pdf"
              style={{ display: "block" }}
            />
          </Box>
        </Stack>
      );
    }
    if (docType === "e_cnh") {
      return (
        <Box mt={4}>
          <Text fontSize="sm" mb={1}>
            Arquivo
          </Text>
          <input
            type="file"
            accept=".jpg,.jpeg,.png,.pdf"
            style={{ display: "block" }}
          />
        </Box>
      );
    }
    return null;
  };

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
              <RadioGroup value={docType} onChange={setDocType} mt={4}>
                <Stack direction="row" spacing={6}>
                  <Radio value="rg">RG</Radio>
                  <Radio value="e_cnh">CNH Digital</Radio>
                  <Radio value="cnh">CNH Impressa</Radio>
                </Stack>
              </RadioGroup>

              {/* File selectors below radio group */}
              {renderFileInputs()}
            </Box>

            <Box
              p={{ base: 4, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              shadow="sm"
            >
              <Heading as="h2" size="md" mb={2}>
                Comprovante de Estado Civil
              </Heading>
              <Text>
                Certidão de Nascimento, Casamento/Divórcio, Pacto Antenupcial,
                Reg. Aux., etc.
              </Text>
              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                mt={2}
                justifyContent={{ base: "flex-start", md: "space-between" }}
                alignItems="center"
              >
                <Box mt={4}>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    style={{ display: "block" }}
                  />
                </Box>
                <Box mt={4}>
                  <Text fontSize="sm" mb={1}>
                    <Link
                      href="https://www.registrocivil.org.br/"
                      target="_blank"
                      color="teal.500"
                      rel="noopener noreferrer"
                      _hover={{ textDecoration: "none" }}
                    >
                      Registro Civil - 2ª Via de Certidões
                      <ExternalLinkIcon mx="2px" ml={2} />
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </Box>
            <Box
              p={{ base: 4, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              shadow="sm"
            >
              <Heading as="h2" size="md" mb={2}>
                Comprovante de Renda
              </Heading>
              <Text>
                Últimos 3 Holerites, Pro Labore mês anterior, D-IRPF 2024/2025,
                etc.
              </Text>

              <Box mt={4}>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  style={{ display: "block" }}
                />
              </Box>
            </Box>
            <Box
              p={{ base: 4, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              shadow="sm"
            >
              <Heading as="h2" size="md" mb={2}>
                Comprovante de Endereço
              </Heading>
              <Text>
                Conta de Água, Energia ou Telefone emitida nos últimos 60 dias.
              </Text>

              <Box mt={4}>
                <input
                  type="file"
                  accept=".jpg,.jpeg,.png,.pdf"
                  style={{ display: "block" }}
                />
              </Box>
            </Box>

            <Box
              p={{ base: 4, md: 6 }}
              rounded="xl"
              borderWidth="1px"
              shadow="sm"
            >
              <Heading as="h2" size="md" mb={2}>
                Declaração do Imposto de Renda
              </Heading>
              <Text>
                Recibo de Entrega e Retificadoras se for o caso ou Comprovante
                de Isento.
              </Text>

              <Stack
                direction={{ base: "column", md: "row" }}
                spacing={4}
                mt={2}
                justifyContent={{ base: "flex-start", md: "space-between" }}
                alignItems="center"
              >
                <Box>
                  <Text fontSize="sm" mb={1}>
                    Declaração
                  </Text>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    style={{ display: "block" }}
                  />
                </Box>
                <Box>
                  <Text fontSize="sm" mb={1}>
                    Recibo de Entrega
                  </Text>
                  <input
                    type="file"
                    accept=".jpg,.jpeg,.png,.pdf"
                    style={{ display: "block" }}
                  />
                </Box>
                <Box mt={4}>
                  <Text fontSize="sm" mb={1}>
                    <Link
                      href="https://cav.receita.fazenda.gov.br/autenticacao/login"
                      target="_blank"
                      color="teal.500"
                      rel="noopener noreferrer"
                      _hover={{ textDecoration: "none" }}
                    >
                      Receita Federal
                      <ExternalLinkIcon mx="2px" ml={2} />
                    </Link>
                  </Text>
                </Box>
              </Stack>
            </Box>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

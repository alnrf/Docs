import { Box } from "@chakra-ui/react";
import { Navbar } from "./components/Navbar";
import { AppRoutes } from "./routes/AppRoutes";

function App() {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Navbar />
      <Box as="main" flex="1 1 auto">
        <AppRoutes />
      </Box>
    </Box>
  );
}
export default App;

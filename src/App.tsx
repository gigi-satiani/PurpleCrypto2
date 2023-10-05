import "./App.css";
import { Box, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import TransactionTimer from "./components/TransactionTimer";
import CryptoCards from "./components/CryptoCards";

function App() {
  return (
    <Grid templateAreas={{ base: `"header" "main"` }}>
      <Box>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="main" width={"100%"}>
          <TransactionTimer />
          <CryptoCards />
        </GridItem>
      </Box>
    </Grid>
  );
}

export default App;

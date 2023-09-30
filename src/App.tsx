import "./App.css";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import TransactionTimer from "./components/TransactionTimer";

function App() {
  return (
    <Grid templateAreas={{ base: `"header" "main"` }} w={"100vw"}>
      <Box>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="main">
          <TransactionTimer />
        </GridItem>
      </Box>
    </Grid>
  );
}

export default App;

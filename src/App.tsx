import "./App.css";
import { Box, Container, Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import TransactionTimer from "./components/TransactionTimer";
import TheButton from "./components/TheButton";

function App() {
  return (
    <Grid templateAreas={{ base: `"header" "main"` }}>
      <Box>
        <GridItem area="header">
          <Header />
        </GridItem>
        <GridItem area="main" width={"100%"}>
          <TransactionTimer />
        </GridItem>
      </Box>
    </Grid>
  );
}

export default App;

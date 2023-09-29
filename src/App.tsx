import "./App.css";
import { Grid, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"header" "main"`,
      }}
    >
      <GridItem area="header">
        <Header />
      </GridItem>
      <GridItem area="main" bg="blue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;

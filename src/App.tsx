import { Button, ChakraProvider } from "@chakra-ui/react";
import theme from "./tehme/theme";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <Button colorScheme="teal">ボタン</Button>
      </ChakraProvider>
    </div>
  );
}

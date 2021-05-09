// 外部importファイル系
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

// ローカル作成ファイル系
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <div className="App">
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ChakraProvider>
    </div>
  );
}

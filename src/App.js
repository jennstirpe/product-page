
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

import GlobalStyles from "./components/styled/Global";
import Header from "./components/Header";
import Product from "./components/Product";





function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
          <GlobalStyles />
            
            <Header />
            

            <Product />
            
      </>
    </ThemeProvider>
  );
}

export default App;

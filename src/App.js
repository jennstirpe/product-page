
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./themes";

import GlobalStyles from "./components/styled/Global";


function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <>
          <GlobalStyles />
            
      </>
    </ThemeProvider>
  );
}

export default App;

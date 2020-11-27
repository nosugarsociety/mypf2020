import React, {Fragment} from 'react';
import {theme} from './theme/theme';
import {ThemeProvider} from './theme';
import {GlobalStyle} from './theme/global';
import {AppContainer} from './components/container';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <GlobalStyle />
        <AppContainer>
          <header className="App-header">
            <p>
              Go! Ju. You will be there.
            </p>
            <h2>KWONN</h2>
          </header>
        </AppContainer>
      </Fragment>
    </ThemeProvider>
  );
}

export default App;
// npm run setup -- --spaceId 9oci2adfywpp --deliveryToken 6P-w44035hzwSIa9g8Uf_TtnIFwzjgNRrT291GopDWM --managementToken CFPAT-j2y2Ebfvd-EX_uqrJSaX3b1q4NSq6I_290oHLcg8zSk

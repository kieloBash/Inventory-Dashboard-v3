import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route} from 'react-router-dom';

import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";

import Dashboard from "./scenes/dashboard/Home";

// Inventory Page
import Record from './scenes/inventory/Records';
import Total from './scenes/inventory/Total';
import Add from './scenes/inventory/Add';
import Sold from './scenes/inventory/Sold';

function App() {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
          <Sidebar />
          <main className="content">
            <Topbar />
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/records" element={<Record />}/>
              <Route path="/total" element={<Total />}/>
              <Route path="/inventoryAdd" element={<Add />}/>
              <Route path="/inventorySold" element={<Sold />}/>
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;

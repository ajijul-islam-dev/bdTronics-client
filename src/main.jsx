import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router";
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material/styles';
import theme from'./theme/theme.js'
import CartProvider from './Providers/CartProvider.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CartProvider>
           <App />
        </CartProvider>
      </ThemeProvider>
    </BrowserRouter>
)

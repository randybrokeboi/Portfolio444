import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ShaderArt } from 'https://esm.sh/shader-art';
import { UniformPlugin } from 'https://esm.sh/@shader-art/plugin-uniform';

ShaderArt.register([() => new UniformPlugin()]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

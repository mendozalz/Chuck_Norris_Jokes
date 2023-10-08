import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {NextUIProvider} from "@nextui-org/system";

ReactDOM.createRoot(document.getElementById('root')).render(
     <NextUIProvider>
     <div className="w-screen h-screen dark text-foreground bg-background p-8 flex items-center justify-center"> 
       <App />
       </div>
     </NextUIProvider>
)

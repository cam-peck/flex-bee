import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import './layout.css';
import './reset.css'
import App from './app'

const container = document.getElementById('root')!
const root = createRoot(container)
root.render(<App />)
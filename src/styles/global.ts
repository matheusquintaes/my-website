import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  :root {
    --white: #ffffff;
    --black: #000000;
    --gray:#B4B2C5;
    --background-color: #F5F5F7;
    --bg-primary-alt: #EFF6FF;
    --bg-secondary-alt: #DBEAFE;
    --primary-color:#2563EB;
    --secondary-color:#1E40AF;
    --text-color:#111827;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --radius: 30px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6,.hero{
    font-family: 'Eudoxus Sans', system-ui, sans-serif;
  } 
  
  body {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
  }

  .container {
    width: 100%;
    max-width: 1120px;
    margin-right: auto;
    margin-left: auto;
  }
`

export default GlobalStyles

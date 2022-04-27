import { createGlobalStyle } from 'styled-components'
import media from 'styled-media-query'

const GlobalStyles = createGlobalStyle`

  :root {
    --white: #ffffff;
    --black: #000000;
    --gray:#B4B2C5;
    --background-color: #F5F5F7;
    --bg-primary-alt: #EFF6FF;
    --bg-secondary-alt: #DBEAFE;
    --bg-dark: #111827;
    --primary-color:#2563EB;
    --secondary-color:#1E40AF;
    --text-color:#111827;
    --spacing-small: 8px;
    --spacing-medium: 16px;
    --spacing-large: 32px;
    --spacing-extra-large: 64px;
    --radius: 30px;
    --section-padding: 100px;
    --section-padding-medium: 64px;
    --section-padding-small: 32px;
  }
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  h1,h2,h3,h4,h5,h6,.hero{
    font-family: 'Eudoxus Sans', system-ui, sans-serif;
  } 
  
  a{
    cursor: pointer;
  }
  .subheading {
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    color:var(--gray);
    margin-bottom: var(--spacing-small);
  }

  .subtitle{
    margin-bottom: var(--spacing-large);
  }

  body {
    font-family: 'Inter', sans-serif;
    font-size: 20px;
  }

  p{
    color: var(--text-color);
    font-weight: 400;
    line-height:34px;

    ${media.lessThan('small')`
      font-size: 16px;
    `}
  }
  .container {
    width: 100%;
    max-width: 1120px;
    margin-right: auto;
    margin-left: auto;
  }
`

export default GlobalStyles

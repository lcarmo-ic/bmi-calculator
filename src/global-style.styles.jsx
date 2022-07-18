import { createGlobalStyle } from "styled-components"
import { handleBackgroudColorByCategory } from "./utils/utils"



export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background: rgb(2,0,36);
    background: ${({ category, isBlog }) => isBlog ? "#edebe4" : handleBackgroudColorByCategory(category)};
    padding: 50px, 30px, 10px, 30px;
    text-align: center;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
    }
`

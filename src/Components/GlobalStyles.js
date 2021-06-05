import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset}
    *{
        box-sizing: border-box;
    }
    @font-face {
    font-family: 'Jal_Onuel';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_20-10-21@1.0/Jal_Onuel.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    }
    #root{
        padding-top: 60px;
        font-family: 'Jal_Onuel', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    a{
        color: black;
        text-decoration: none;
    }
    ::-webkit-scrollbar { 
        width: 10px;
        background-color: transparent;
     } /* 스크롤 바 */
    ::-webkit-scrollbar-track { 
        background-color: transparent;
    } /* 스크롤 바 밑의 배경 */
    ::-webkit-scrollbar-thumb { 
        background: #a4b0be; 
        border-radius: 10px;
     } /* 실질적 스크롤 바 */
    ::-webkit-scrollbar-thumb:hover { 
        background: #404040; 
    } /* 실질적 스크롤 바 위에 마우스를 올려다 둘 때 */
    ::-webkit-scrollbar-thumb:active { 
        background: #808080; 
    } /* 실질적 스크롤 바를 클릭할 때 */
    ::-webkit-scrollbar-button {
         display: none; 
    } /* 스크롤 바 상 하단 버튼 */
`;

export default GlobalStyles;

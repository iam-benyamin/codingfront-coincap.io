import styled from "styled-components";

export const SwapStyle = styled.div`
    background: #eceff1;
    padding: 40px 0;
    display: flex;
    justify-content: center;
`

export const Box = styled.div`
    border-radius: 13px;
    background: #ffffff;
    box-shadow: rgb(0, 0, 0, 0.1) 0px 0px 9px;
    width: 90%;
    max-width: 460px;
    height: 410px;
    .head {
        display: flex;
        justify-content: space-between;
        padding: 5px;
        margin: 20px 20px;
        h3 {
            opacity: 0.9;
        }
        button {
            all: unset;
            font-size: 24px;
            opacity: 0.8;
            &:hover {
                opacity: 1;
            }
        }
    }
    .connect-to-wallet {
        text-align: center;
        button {
            all: unset;
            margin: 1rem;
            cursor: pointer;
            background-color: rgb(24 198 131);
            padding: 1.1em 0.85em;
            border-radius: 10em;
            color: #ffffff;
            font-size: 18px;
            font-weight: bold;
            text-align: center;
            width: 85%; 
        }
    }
`
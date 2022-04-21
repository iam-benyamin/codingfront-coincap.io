import styled from "styled-components";

export const Banner = styled.div`
    background: linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
    padding-bottom: 20px;
    .banner-content {
        padding-top: 25px;
        display: flex;
        justify-content: space-between;
        color: #ffffff;
        .coin-rank {
            position: relative;
            &:before {
                content: "";
                width: calc(100% + 20px);
                height: 10px;
                background: #18c683;
                position: absolute;
                left: -10px;
                top: 0px;
                border-radius: 8px;
            }
            padding-top: 10px;
            text-align: center;
            font-size: 22px;
            font-weight: 700;
            background: #18c683;
            width: 60px;
            height: 90px;
            border-bottom-right-radius: 15px; 
            border-bottom-left-radius: 15px; 
            p {
                opacity: 1;
                padding-top: 22px;
            }
        }
        .coin {
            p {
                font-weight: 700;
                line-height: 1.3em;
                opacity: 1;
                font-size: 24px;
                margin-bottom: 15px;
                &:nth-child(2) {
                    font-weight: 500;
                }
            }
            span {
                margin-left: 15px;
                font-size: 18px;
            }
        }
        p {
            font-weight: 400;
            line-height: 1.2em;
            opacity: 0.6;
            font-size: 14px;
            margin-bottom: 4px;
        }
        span {
            font-size: 1.28em;
        }
        button {
            mrgin-top: 30px;
            padding: 9px 10px;
        }
    }
`
export const Chart = styled.div`
    width: 70%;
    height: 500px;
    margin: 20px auto;
`

export const Swap = styled.div`
    margin-left: 20px;
    border-radius: 13px;
    background: #ffffff;
    box-shadow: rgb(0, 0, 0, 0.1) 0px 0px 9px;
    width: 90%;
    max-width: 360px;
    height: 430px;
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
    .swaper-wrapper {
        input, button {
            all: unset;
        }
        label {
            font-size: 14px;
            font-weight: bold;
            color: rgba(0, 0, 0, 0.6);
        }
        padding: 0 20px 20px;
        .sell {
            border-radius: 12px;
            padding: 14px;
            border: 1px solid rgb(236, 239, 241);
            background: rgb(249, 249, 249);
            .sell--input {
                padding-top: 5px;
                display: flex;
                justify-content: space-between;
                input {
                    font-size: 22px;
                    max-width: 150px;
                    margin-right: 5px;
                }
                .sell--input__button {
                    display: flex;
                    align-items: center;
                    background-color: transparent;
                    color: rgba(0, 0, 0, 0.9);
                    white-space: nowrap;
                    font-size: 1.2em;
                    font-weight: bold;
                    font-family: inherit;
                    padding: 15px 10px 5px 0px !important;
                    span {
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-right: 6px;
                        img {
                            height: 26px;
                            width: auto;
                            margin-right: 10px;
                        }
                    }
                    &:hover {
                        color: #16ab71;
                    }
                }
            }
        }
        .swap-icon {
            display: flex;
            align-items: center;
            padding-left: 17px;
            justify-content: flex-start;
            height: 60px;
            img {
                width: auto;
                height: 55%;
                padding: 5px;
                cursor: pointer;
            }
        }
        .get {
            border-radius: 12px;
            padding: 14px;
            border: 1px solid rgb(236, 239, 241);
            background: rgb(249, 249, 249);
            .get--input {
                display: flex;
                justify-content: space-between;
                input {
                    font-size: 22px;
                    max-width: 150px;
                    margin-right: 5px;
                }
                .get--input__button {
                    display: flex;
                    align-items: center;
                    background-color: transparent;
                    color: rgba(0, 0, 0, 0.9);
                    white-space: nowrap;
                    font-size: 1.2em;
                    font-weight: bold;
                    font-family: inherit;
                    padding: 15px 15px 5px 0 !important;
                    .get--input__button__span {
                        display: flex;
                        align-items: center;
                        justify-content: space-aroud;
                        margin-right: 6px;
                    }
                    &:hover {
                        color: #16ab71;
                    }
                }
            }

        }
    }
    .connect-to-wallet {
        text-align: center;
        button {
            all: unset;
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

export const StyleData = styled.div`
    margin: 30px auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Table = styled.div`
    margin-top: -40px;
    padding: 100px 0 0 0;
    .content {
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background: #ffffff;
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        table {
            width: 100%;
            border-collapse: collapse;            
            border-radius: 5px;
            tr {
                border-bottom: 1px solid #22242626;
                th {
                    background: #fafafa;
                    color: #00000099;
                    font-size: 0.9rem;
                    font-weight: 300;
                    cursor: pointer;
                    padding: 13px 15px;
                    text-align: right;
                    &:nth-child(1) {
                        text-align: center;
                        border-top-left-radius: 5px;
                    }
                    &:nth-child(2) {
                        text-align: left;
                    }
                    &:nth-child(8) {
                        border-top-right-radius: 5px;
                    }
                    &:hover {
                        color: #000000;
                    }
                }
                &:hover {
                    background: #0000000d;
                    cursor: pointer;
                }
                td {
                    padding: 11px;
                    margin: 1rem;
                    font-weight: 200;
                    font-size: 14px;
                    color: #000000e6; 
                    text-align: right;
                    line-height: 1.3;
                    &:nth-child(1) {
                        text-align: left;
                    }
                    &:nth-child(6) {
                        text-align: center;
                    }
                }
            }
        }
    }
`

export const Btn = styled.div`
    all: unset;
    button {
        all: unset;
        display: inline-block;
        background: #18c683;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        color: #ffffff;
        padding: 10px 16px;
        font-size: 14px;
        border-radius: 10em;
        text-align: center;
        margin-top: 35px;
        margin-bottom: 25px;
        width: 6em;
        &:hover {
            cursor: pointer;
        }
    }
`

export const Circle = styled.span`
    text-align: center;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: block;
    margin: auto;
`
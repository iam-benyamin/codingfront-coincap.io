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
    height: 450px;
    margin-bottom: 80px;
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
                    max-width: 269px;
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
                    max-width: 235px;
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
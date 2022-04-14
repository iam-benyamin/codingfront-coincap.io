import styled from "styled-components";

export const Content = styled.div`
    background: #eceff1;
    position: relative;
    text-align: center;
`
export const Circle = styled.span`
    background: #18c683;
    text-align: center;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: block;
    margin: auto;
`

export const Banner = styled.div`
    height: 230px;
    font-size: 1rem;
    background: linear-gradient(90deg, rgba(63, 81, 181, 1) 0%, rgba(100, 181, 246, 1) 100%);
    color: #ffffff;
    text-align: center;
    .column {
        display: flex;
        justify-content: space-between;
        padding-top: 20px;
        .title {
            font-wight: 800;
            font-size: 1em;
            text-tarnsform: uppercase;
        }
        .value {
            font-size: 1.5rem
        }
    }
`


export const Table = styled.div`
    margin-top: -240px;
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
                    &:nth-child(7) {
                        border-top-right-radius: 5px;
                        text-align: center;
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
                    line-height: 1.8;
                    &:nth-child(1) {
                        text-align: center;
                    }
                    &:nth-child(2) {
                        text-align: left;
                    }
                    &.name {
                        text-align: left;
                        .coin-logo {
                            float: left;
                            width: 30px;
                            hight: 30px;
                            img {
                                width: 100%;
                                hight: 100%;
                            }
                        }
                        a.name-content {
                            color: rgba(0, 0, 0, 0.9);
                            float: left;
                            margin-left: 5px;
                            span {
                                &.symbol {
                                    opacity: 0.7;
                                    line-height: 1.4;
                                    font-size: 12px;
                                }
                            }
                            &:hover {
                                text-decoration: underline;
                            }
                        }
                    }
                }
            }
        }
    }
`

export const Btn = styled.div`
    min-height: 20px;
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
        // TODO transition, button animation
        &:hover {
            cursor: pointer;
        }
    }
`
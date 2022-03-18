import styled from "styled-components";

export const Content = styled.div`
    background: #eceff1;
    position: relative;
    text-align: center;
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
        table {
            width: 100%;
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
        // TODO transition, button animation
        &:hover {
            cursor: pointer;
        }
    }
`
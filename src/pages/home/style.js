import styled from "styled-components";

export const Content = styled.div`
    background: #eceff1;
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

export const Table = styled.table`
    box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
    background: #ffffff;
    width: 100%;
;
` 
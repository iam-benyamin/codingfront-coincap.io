import styled from "styled-components";

export const TableInfo = styled.div`
    min-height: 150px;
    display: flex;
    .date {
        margin-left: 20px;
        line-height: 2;
        opacity: 0.8;
    }
    .statistics {
        display: flex;
        justify-content: space-between;
        margin-left: 20px;
        line-height: 2.3;
        opacity: 0.8;
    }
`
export const IntervalDiv = styled.div`
    margin-top: 15px;
    span {
        cursor: pointer;
        color: #18c683;
        padding: 5px 8px;
        border-radius: 15px;
        margin-left: 10px;
        font-size: 13px;
        &:active {
            background: #18c683;
            color: #ffffff;
        }
    }
`
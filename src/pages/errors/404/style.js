import styled from "styled-components";

export const NotFoundStyle = styled.div`
    position: absolute;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    .number {
        border-right: 1px solid rgba(0, 0, 0,.3);
        margin-right: 20px;
        float: left;
        margin: 0;
        padding: 10px 23px 10px 0;
        font-weight: 500;
        display: inline-block;
        vertical-align: top;
    }
    .discription {
        font-size: 13px;
        font-weight: 400;
        float: left;
        padding: 14px 23px;
    }
`
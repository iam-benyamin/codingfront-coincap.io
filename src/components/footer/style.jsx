import styled from "styled-components";

export const Style = styled.div`
  display: flex;
  padding-top: 50px;
  padding-bottom: 50px;
  flex-basis: 0.5;
  .col {
    margin-right: 40px;
    max-width: 25%;
    h4 {
      color: #ffffff;
    }
    ul {
      margin: 20px 0;
      li {
        width: 100%;
        line-height: 1.8;
        a {
          display: block;
          color: rgba(255, 255, 255, 0.5);
        }
      }
    }
    &.legals-disclimer {
      span {
        display: block;
        margin: 20px 0;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    &.social-media {
      margin-right: 150px;
      ul {
        li {
            width: 40px;
          a {
            display: inline-block;
            padding: 8px;
            margin-right: 5px;
          }
        }
      }
    }
    &.get-app {
      h4 {
        margin-bottom: 30px;
      }
      a {
        width: 100%;
        display: block;
      }
    }
  }
`;

import styled from "styled-components";

export const HeaderDiv = styled.div`
  box-shadow: 0 1px 2px 0 rgba(34, 36, 38, 0.15);
  display: flex;
  justify-content: space-around;
  align-items: center;
  #menu {
    display: flex;
    li {
      a {
        diplay: block;
        padding: 32px 15px;
        color: rgba(0, 0, 0, 0.87);
        &:hover {
          background-color: rgba(0, 0, 0, 0.03);
        }
      }
    }
  }
  #logo {
    display: flex;
    a {
      diplay: block;
      padding: 20px 10px;
      img {
        height: 100%;
        width: 90px;
      }
      &:hover {
        cursor: pointer;
        background-color: rgba(0, 0, 0, 0.03);
      }
    }
  }
  #buttons {
    button {
      all: unset;
      margin: 1rem;
      cursor: pointer;
      &:nth-child(1) {
        cursor: text;
      }
      &:nth-child(3) {
        background-color: rgb(24 198 131);
        padding: 0.85em;
        border-radius: 10em;
        color: #ffffff;
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
      }
    }
  }
`;

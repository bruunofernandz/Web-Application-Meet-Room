import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Form = styled.form`
  height: 500px;
  width: 400px;
  background: #fff;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 0px;
  .image{
    width: 100px;
    margin: 10px 0 40px;
    position: relative;
    bottom: 50px;
  }
  p {
    color: #ff3333;
    margin-bottom: 80px;
    border: 1px solid #ff3333;
    padding: 10px;
    width: 200px;
    text-align: center;
    position: relative;
  }

  button {
    color: #fff;
    font-size: 16px;
    background: #fc6963;
    height: 56px;
    border: 0;
    border-radius: 5px;
    width: 100%;
    transition: 1s;
  }
  button: hover {
    cursor: pointer;
    transition: 1s;
    opacity: 0.8;
  }
  a {
    font-size: 16;
    font-weight: bold;
    color: #999;
    text-decoration: none;
  }
  input {
    height: 46px;
    margin-bottom: 15px;
    padding: 0 20px;
    color: #777;
    font-size: 15px;
    width: 100%;
    border: 1px solid #ddd;
 
    &::placeholder {
      color: #999;
    }
  }
  hr {
    margin: 20px 0;
    border: none;
    border-bottom: 1px solid #cdcdcd;
    width: 100%;
  }
`;
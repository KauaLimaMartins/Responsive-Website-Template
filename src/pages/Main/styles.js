import styled from "styled-components";

export const Container = styled.div`
  background: url(${(props) => props.headerBg});
  background-repeat: no-repeat;
  background-size: 100vw;
  height: auto;
`;

export const Header = styled.header`
  display: flex;
  flex-direction: column;
  height: auto;
`;

export const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  font-family: Arial, Helvetica, sans-serif;

  svg {
    margin-left: 20px;
    width: 30px;
    height: 30px;
  }

  .left {
    padding-left: 40px;
  }

  .right {
    display: flex;
    align-items: center;
    padding-right: 40px;

    p {
      margin-left: 5px;
      color: #fff;
      font-size: 18px;
    }
  }

  @media (max-width: 750px) {
    .left {
      padding-left: 5px;
    }

    .right {
      padding-right: 5px;
    }
  }

  @media (max-width: 680px) {
    svg {
      margin-left: 5px;
    }
  }

  @media (max-width: 750px) {
    & {
      flex-direction: column-reverse;
      align-items: center;
      padding-top: 5px;
    }

    .left {
      padding-left: 0;
    }

    .right {
      padding-bottom: 10px;
    }
  }

  @media (max-width: 560px) {
    .right p {
      font-size: 16px;
    }

    svg {
      width: 25px;
      height: 25px;
    }
  }

  @media (max-width: 410px) {
    .right p {
      font-size: 12px;
    }

    svg {
      width: 15px;
      height: 15px;
      margin-left: 10px;
    }
  }
`;

export const HeaderCenter = styled.div`
  padding-bottom: 20px;
  margin: 10% auto;
  font-family: Arial, Helvetica, sans-serif;
  text-align: center;

  p.title {
    color: #fff;
    font-size: 64px;
    font-weight: bold;
    padding-bottom: 5px;

    span {
      color: #71ccff;
    }
  }

  p.text {
    font-size: 36px;
    font-weight: bold;
    color: #ededed;
  }

  @media (max-width: 870px) {
    p.title {
      font-size: 50px;
    }

    p.text {
      font-size: 22px;
    }
  }

  @media (max-width: 680px) {
    & {
      margin: 3% auto;
    }
  }

  @media (max-width: 560px) {
    p.title {
      font-size: 45px;
    }

    p.text {
      font-size: 17px;
    }
  }

  @media (max-width: 400px) {
    p.title {
      font-size: 35px;
    }

    p.text {
      font-size: 12px;
    }
  }
  @media (max-width: 340px) {
    p.title {
      font-size: 25px;
    }

    p.text {
      font-size: 12px;
    }
  }
`;

export const Carousel = styled.div`
  margin: 0 auto;
  padding: 50px 0;
  height: 100%;
  width: 100%;
  border-bottom: 2px solid #dedede;

  img {
    width: 972px;
    height: 485px;
  }

  @media (max-width: 1100px) {
    img {
      width: 900px;
      height: 400px;
    }
  }
  @media (max-width: 850px) {
    img {
      width: 800px;
      height: 300px;
    }
  }
  @media (max-width: 725px) {
    img {
      width: 750px;
      height: 250px;
    }
  }
  @media (max-width: 625px) {
    img {
      width: 700px;
      height: 200px;
    }
  }
  @media (max-width: 525px) {
    img {
      width: 680px;
      height: 180px;
    }
  }
  @media (max-width: 470px) {
    img {
      width: 660px;
      height: 160px;
    }
  }
  @media (max-width: 430px) {
    img {
      width: 640px;
      height: 140px;
    }
  }
  @media (max-width: 380px) {
    img {
      width: 620px;
      height: 120px;
    }
  }

  @media (max-width: 340px) {
    img {
      width: 600px;
      height: 100px;
    }
  }
`;

export const ThreeCirclesContainer = styled.div`
  width: 100%;
  padding: auto;
  display: grid;

  grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  grid-gap: 50px;

  div {
    margin-top: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title {
    margin-top: 20px;
    font-family: Arial, Helvetica, sans-serif;
    font-weight: bold;
    font-size: 36px;
    line-height: 42px;
    text-align: center;
    color: #3d99cc;
  }

  .text {
    width: 90%;
    margin-top: 5px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    color: #333333;
  }

  @media (max-width: 600px) {
    image {
      width: 250px;
      height: 250px;
    }

    .title {
      font-size: 30px;
      line-height: 36px;
    }

    .text {
      width: 70%;
      font-size: 18px;
      line-height: 22px;
    }
  }
  @media (max-width: 440px) {
    image {
      width: 220px;
      height: 220px;
    }

    .title {
      font-size: 25px;
      line-height: 31px;
    }

    .text {
      width: 70%;
      font-size: 16px;
      line-height: 20px;
    }
  }
  @media (max-width: 380) {
    image {
      width: 180px;
      height: 180px;
    }

    .title {
      font-size: 25px;
      line-height: 31px;
    }

    .text {
      width: 70%;
      font-size: 16px;
      line-height: 20px;
    }
  }
`;

export const BlueBottom = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: url(${(props) => props.blueBg});
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  margin-top: 60px;
  text-align: center;

  div {
    margin-top: 25%;
    padding-bottom: 20px;
  }

  .title {
    font-weight: bold;
    font-size: 26px;
    line-height: 30px;

    color: #ffffff;
  }

  .text {
    font-size: 20px;
    line-height: 23px;

    color: #f5f5f5;
  }

  form {
    margin-top: 23%;
    display: flex;
    flex-direction: column;
    width: 300px;
  }

  form p {
    margin-bottom: 10px;
    font-weight: bold;
    font-size: 22px;
    line-height: 19px;
    text-align: center;

    color: #fff;
  }

  form input {
    width: 100%;
    height: 50px;
    border-radius: 8px;
    color: #333;
    margin-top: 15px;
    padding-left: 40px;
    padding-right: 10px;
  }

  form button {
    margin: 30px auto;
    width: 200px;
    height: 50px;
    background: #1484c3;
    border-radius: 200px;

    font-weight: bold;
    font-size: 16px;
    line-height: 19px;
    text-align: center;

    color: #ffffff;
  }

  form svg {
    width: 30px;
    height: 30px;
    position: absolute;
    margin-left: 6px;
  }

  form .person {
    margin-top: 54px;
  }

  form .phone {
    margin-top: 121px;
  }

  form .email {
    margin-top: 184px;
  }

  @media (max-width: 1950px) {
    div {
      margin-top: 40%;
    }

    form {
      margin-top: 38%;
    }
  }

  @media (max-width: 995px) {
    div {
      margin-top: 48%;
    }

    form {
      margin-top: 46%;
    }
  }

  @media (max-width: 870px) {
    & {
      flex-direction: column-reverse;
      margin-top: 0;
    }

    div {
      margin-top: 10px;
      padding-bottom: 30px;
    }

    form {
      margin-top: 48%;
    }
  }
  @media (max-width: 760px) {
    div {
      margin-top: 10px;
      padding-bottom: 30px;
    }

    form {
      margin-top: 52%;
    }
  }
  @media (max-width: 670px) {
    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 60%;
    }
  }
  @media (max-width: 630px) {
    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 65%;
    }
  }
  @media (max-width: 515px) {
    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 80%;
    }
  }

  @media (max-width: 470px) {
    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 92%;
    }

    img {
      width: 350px;
      height: 205px;
    }
  }

  @media (max-width: 380px) {
    .text {
      font-size: 18px;
    }

    .title {
      font-size: 24px;
    }

    form input {
      width: 260;
      height: 30;
    }

    form button {
      margin-top: 15px;
      margin-bottom: 10px;
    }

    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 100%;
    }

    img {
      width: 320px;
      height: 187px;
    }
  }

  @media (max-width: 330px) {
    form input {
      width: 200;
      height: 20;
    }

    form button {
      width: 140;
      height: 20;
    }

    .text {
      font-size: 16px;
    }

    .title {
      font-size: 20px;
    }

    div {
      margin-top: 10px;
      padding-bottom: 20px;
    }

    form {
      margin-top: 100%;
      padding-top: 60px;
    }

    img {
      width: 280px;
      height: 164px;
    }
  }
`;

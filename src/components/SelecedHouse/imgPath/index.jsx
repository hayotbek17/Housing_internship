import React from 'react';
import { Container, ImgCon } from './style';
import img from '../../../assets/img/ditailhouse1.png';
import img1 from '../../../assets/img/ditailhouse2.png';
const ImgPath = () => {
  return (
    <Container>
      <ImgCon>
        <ImgCon.Left src={img} />
        <ImgCon.Right>
          <ImgCon.Right.Child>
            <ImgCon.Right.Child.In src={img1} />
            <ImgCon.Right.Child.In src={img1} />
          </ImgCon.Right.Child>
          <ImgCon.Right.Child>
            <ImgCon.Right.Child.In src={img1} />
            <ImgCon.Right.Child.In src={img1} />
          </ImgCon.Right.Child>
        </ImgCon.Right>
      </ImgCon>
    </Container>
  );
};

export default ImgPath;

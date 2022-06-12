import styled from 'styled-components';

const Container = styled.div``;

const ImgCon = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  height: 400px;
`;

ImgCon.Left = styled.img`
  max-width: 600px;
  width: 100%;
`;
ImgCon.Right = styled.div`
  display: flex;
  gap: 20px;
  max-width: 600px;
  width: 100%;
`;

ImgCon.Right.Child = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 20px;
`;

ImgCon.Right.Child.In = styled.img`
  height: 190px;
  max-width: 290px;
  width: 100%;
`;

export { Container, ImgCon };

import styled from 'styled-components';
import { ReactComponent as LogoIcon } from '../../assets/icons/logo.svg';
import { ReactComponent as EmailIcon } from '../../assets/icons/email 1.svg';
import { ReactComponent as PinIcon } from '../../assets/icons/pin.svg';
import { ReactComponent as PhoneIcon } from '../../assets/icons/phone.svg';
import { BsFacebook, BsTwitter, BsInstagram, BsLinkedin } from 'react-icons/bs';
const Container = styled.div`
  background: #0d263b;
  /* height: 417px; */
  width: 100%;
  display: flex;
  flex-direction: column;

  align-items: center;
`;

const Wrapper = styled.div`
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  padding: 48px 130px 0px 130px;
  width: 100%;
  height: 384px;
  max-width: 1440px;
  @media (max-width: 1000px) {
    padding: 48px 20px 0px 20px;
  }
  @media (max-width: 760px) {
    padding: 16px;
    flex-direction: column;
    height: 1285px;
    padding-top: 48px;
  }
`;
Wrapper.In = styled.div`
  display: flex;
  flex-direction: column;
`;
const Bottom = styled.div`
  display: flex;
  align-items: center;
  padding: 0px 130px;
  border-top: 2px solid rgba(255, 255, 255, 0.15);
  height: 68px;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 760px) {
    flex-direction: column;
    height: 148px;
    padding: 0px;
    padding-top: 20px;
  }
`;
const Title = styled.div`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ffffff;
  padding-bottom: 32px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Subtitle = styled.a`
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #ffffff;
  padding-bottom: 20px;
  display: flex;
  align-items: center;
`;
Logo.Icon = styled(LogoIcon)``;
Logo.Title = styled.div`
  margin-left: 11px;
  font-size: 20px;
  font-weight: 500px;
  color: #ffff;
`;
Logo.MailIcon = styled(EmailIcon)`
  margin-right: 10px;
`;
Logo.PhoneIcon = styled(PhoneIcon)`
  margin-right: 10px;
`;
Logo.PinIcon = styled(PinIcon)`
  margin-right: 10px;
`;
const SocialIcons = styled.div`
  width: 150px;
  /* border: 1px solid white; */
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  padding-top: 40px;
`;

SocialIcons.Facebook = styled(BsFacebook)`
  color: white;
  height: 20px;
  width: 20px;
`;
SocialIcons.Twitter = styled(BsTwitter)`
  color: white;
  height: 20px;
  width: 20px;
`;
SocialIcons.Instagram = styled(BsInstagram)`
  color: white;
  height: 20px;
  width: 20px;
`;
SocialIcons.Linkedin = styled(BsLinkedin)`
  color: white;
  height: 20px;
  width: 20px;
`;
export { Container, Wrapper, Bottom, Logo, Subtitle, Title, SocialIcons };

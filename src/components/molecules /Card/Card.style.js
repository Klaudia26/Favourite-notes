import styled, { css } from 'styled-components';
import Heading from '../../Heading/Heading';
import Paragraph from '../../Paragraph/Paragraph';
import LinkIcon from '../../../assets/icons/link.svg';

const StyledWrapper = styled.div`
  min-height: 380px;
  box-shadow: 0 10px 30px -10px hsla(0, 0%, 0%, 0.1);
  border-radius: 10px;
  overflow: hidden;
  display: grid;
  grid-template-rows: 0.25fr 1fr;
`;

const InnerWrapper = styled.div`
  position: relative;
  padding: 17px 30px;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : 'white')};

  ${({ flex }) =>
    flex &&
    css`
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    `}

  :first-of-type {
    z-index: 999;
  }
`;

const DateInfo = styled(Paragraph)`
  font-weight: ${({ theme }) => theme.regular};
  font-size: ${({ theme }) => theme.fontSize.xs};
  margin: 0 0 10px;
`;

const StyledHeading = styled(Heading)`
  margin: 5px 0 0;
`;

const Avatar = styled.img`
  position: absolute;
  right: 25px;
  top: 25px;
  width: 86px;
  height: 86px;
  border: 5px solid ${({ theme }) => theme.twitter};
  border-radius: 50%;
`;

const LinkButton = styled.a`
  display: block;
  position: absolute;
  right: 25px;
  top: 50%;
  width: 47px;
  height: 47px;
  border-radius: 50px;
  background: white url(${LinkIcon});
  background-size: contain;
  background-size: 60%;
  background-position: 50%;
  background-repeat: no-repeat;
  transform: translateY(-50%);
`;
export default { StyledWrapper, InnerWrapper, DateInfo, StyledHeading, Avatar, LinkButton };

import React from 'react';
import PropTypes from 'prop-types';
import Paragraph from '../../Paragraph/Paragraph';
import Button from '../../atoms/Button/Button';
import avatar from '../../../assets/foto-kurs.jpg';
import STYLE from './Card.style';

const Card = ({ cardType }) => {
  return (
    <STYLE.StyledWrapper>
      <STYLE.InnerWrapper activeColor={cardType}>
        <STYLE.StyledHeading>Hello Roman</STYLE.StyledHeading>
        <STYLE.DateInfo>3 days</STYLE.DateInfo>
        {cardType === 'twitter' && <STYLE.Avatar src={avatar} />}
        {cardType === 'article' && <STYLE.LinkButton href="https://youtube.com/helloroman" />}
      </STYLE.InnerWrapper>
      <STYLE.InnerWrapper flex>
        <Paragraph>
          It is a long established fact that a reader will be distracted by the readable content of
          a page when looking at its layout. The point of using Lorem Ipsum is that it has a
          more-or-less normal distribution of letters, as opposed to using Content here, content
          here, making it look like readable English. Many web sites still in their infancy.
        </Paragraph>
        <Button secondary>REMOVE</Button>
      </STYLE.InnerWrapper>
    </STYLE.StyledWrapper>
  );
};

Card.propTypes = {
  cardType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

Card.defaultProps = {
  cardType: 'note',
};

export default Card;

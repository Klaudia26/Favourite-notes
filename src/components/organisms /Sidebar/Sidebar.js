import React from 'react';
import { NavLink } from 'react-router-dom';
import ButtonIcon from '../../atoms/ButtonIcon/ButtonIcon';
import bulbIcon from '../../../assets/icons/bulb.svg';
import logoutIcon from '../../../assets/icons/logout.svg';
import penIcon from '../../../assets/icons/pen.svg';
import twitterIcon from '../../../assets/icons/twitter.svg';
import STYLE from './Sidebar.style';

// eslint-disable-next-line react/prop-types
export const SideBar = ({ pageType }) => (
  <STYLE.StyledWrapper activeColor={pageType}>
    <STYLE.StyledLogoLink to="/" />
    <STYLE.StyledLinksList>
      <li>
        <ButtonIcon exact as={NavLink} to="/" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitter" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/article" icon={bulbIcon} activeclass="active" />
      </li>
    </STYLE.StyledLinksList>
    <STYLE.StyledLogoutButton>
      <ButtonIcon as={NavLink} to="/login" icon={logoutIcon} />
    </STYLE.StyledLogoutButton>
  </STYLE.StyledWrapper>
);

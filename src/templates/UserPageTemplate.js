import React from 'react';
import PropTypes from 'prop-types';
import { SideBar } from '../components/organisms /Sidebar/Sidebar';

export const UserPageTemplate = ({ children, pageType }) => {
  return (
    <>
      <SideBar pageType={pageType} />
      {children}
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  pageType: PropTypes.oneOf(['note', 'twitter', 'article']),
};

UserPageTemplate.defaultProps = {
  pageType: 'note',
};

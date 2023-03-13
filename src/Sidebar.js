import React from 'react';
import logo from './logo.svg';
import { FaTimes } from 'react-icons/fa';
import { social, links } from './data';

const Sidebar = () => {
  return (
    <Sidebar>
      {links.map((link) => {
        const { id, url, text } = link;
        return (
          <li key={id}>
            <a href={url}>{text}</a>
          </li>
        );
      })}
    </Sidebar>
  );
};

export default Sidebar;

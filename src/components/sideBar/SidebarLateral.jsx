import React, { useState } from 'react';
import SidebarImages from '../../utils/images/imagesSideBar';
import './sideBarLateral.css';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const buttons = [
    { img: SidebarImages.coronaVirusLogo },
    { img: SidebarImages.iconoGrafico },
    { img: SidebarImages.iconoBarras },
    { img: SidebarImages.iconoCuadrado },
    { img: SidebarImages.iconoCarpeta },
    { img: SidebarImages.iconoPantallas },
    { img: SidebarImages.iconoFlecha },
    { img: SidebarImages.iconoGlobo },
    { img: SidebarImages.iconoMensaje },
    { img: SidebarImages.iconoHueco },
  ];

  return (
    <div className="sidebar">
      {buttons.map((button, index) => {
        
        const isLogo = index === 0;
        const isActive = activeIndex === index && !isLogo;
        const isLast = index === buttons.length - 1;
        const buttonClasses = [
          'sidebar-button',
          isActive ? 'active' : '',
          isLogo ? 'logo no-highlight' : '',
          isLast ? 'last-button' : '',
        ].join(' ');

      
        return (
          <button
            key={index}
            className={buttonClasses}
            onClick={() => handleClick(index)}
          >
            <img src={button.img} alt="" />
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar;

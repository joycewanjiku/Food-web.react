import React from 'react';
import './Menu.css';
import Chicken from"../images/images/sandwhich.png"
import pizza from "../images/images/tomatBread.png"
import fry from "../images/images/chikenfry.png"
import grill from "../images/images/Grillsandwich.png"
import taco from "../images/images/TacoTraif.png"
import noddle from "../images/images/Noddle'sRamen.png"


const Menu = () => {
  const sections = [
    {
      imageSrc: Chicken,
      title: 'Chicken Burger',
      description: 'Description for section 1',
      price: 3.50,
    },
    {
      imageSrc:pizza,
      title: 'Chicken Pizza',
      description: 'Description for section 2',
      price: 4.20,
    },
    {
      imageSrc: fry,
      title: 'Chicken Fry',
      description: 'Description for section 3',
      price: 5.00,
    },
    {
      imageSrc: grill,
      title: 'Grill Sandwich',
      description: 'Description for section 4',
      price: 4.80,
    },
    {
      imageSrc: taco,
      title: 'Taco',
      description: 'Description for section 5',
      price: 3.63,
    },
    {
      imageSrc: noddle,
      title: 'Noodles',
      description: 'Description for section 6',
      price: 6.50,
    },
  ];

  const firstSet = sections.slice(0, 3);
  const secondSet = sections.slice(3);

  return (
    <div className='container'>
      <Section sections={firstSet} />
      <Section sections={secondSet} />
    </div>
  );
}

function Section({ sections }) {
  return (
    <div className='section1'>
      {sections.map((section, index) => (
        <div key={index} className='section-item'>
          <div>
          <img src={section.imageSrc} alt='Section' className='image' />
          </div>
          <div className='details'>
          <h2 className='title'>{section.title}</h2>
          <p className='stars'>*****</p>
          <p className='description'>{section.description}</p>
          <p className='price'>${section.price}</p>
          <button className='buy-button'>Buy Now</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Menu;

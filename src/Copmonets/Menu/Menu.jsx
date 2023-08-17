import React from 'react';
import './Menu.css';

const Menu = () => {
  const sections = [
    {
      imageSrc: '/images/chickenBurger.png',
      title: 'Chicken Burger',
      description: 'Description for section 1',
      price: 3.50,
    },
    {
      imageSrc: '/images/chickenPizza.png',
      title: 'Chicken Pizza',
      description: 'Description for section 2',
      price: 4.20,
    },
    {
      imageSrc: '/images/chickenFry.jpg',
      title: 'Chicken Fry',
      description: 'Description for section 3',
      price: 5.00,
    },
    {
      imageSrc: '/images/grillSandwich.png',
      title: 'Grill Sandwich',
      description: 'Description for section 4',
      price: 4.80,
    },
    {
      imageSrc: '/images/taco.png',
      title: 'Taco',
      description: 'Description for section 5',
      price: 3.63,
    },
    {
      imageSrc: '/images/noodles.png',
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
    <div className='section'>
      {sections.map((section, index) => (
        <div key={index} className='section-item'>
          <img src={section.imageSrc} alt='Section' className='image' />
          <h2 className='title'>{section.title}</h2>
          <div className='stars'>*****</div>
          <p className='description'>{section.description}</p>
          <div className='price'>${section.price}</div>
          <button className='buy-button'>Buy Now</button>
        </div>
      ))}
    </div>
  );
}

export default Menu;

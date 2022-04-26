import React, {useState} from 'react';
import { render } from 'react-dom';
import './style.css';

const MenuItem = ({onSelect, text}) => {
  // delší varianta
  // const handleClick = () => {
  // onSelect(text);
  // };
  
  return (
    <a href="#" className='menu-item' onClick={() => onSelect(text)}>{text}</a>
  );
};



const App = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [pageTitle, setPageTitle] = useState("Domů");

  // const handleMenuClick = () => {
  //   // if(menuOpened === true){
  //   //   setMenuOpened(false)
  //   // } else if (menuOpened === false){
  //   //   setMenuOpened(true)
  //   // }
  //   setMenuOpened(!menuOpened)
  // }

  const handleSelectItem = (text) => {
    setPageTitle(text)
    setMenuOpened(false)
  };



  return (
    <>
      <header>
        <div className={`{menu ${menuOpened ? '' : 'menu--closed'}`}>
          <button 
          className="menu__btn" 
          onClick={() => setMenuOpened(!menuOpened)} ></button>
          <div className="menu__items">
            <MenuItem onSelect={handleSelectItem} text="Domů"  />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

render(<App />, document.querySelector('#app'));




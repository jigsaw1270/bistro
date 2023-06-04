import { Helmet, HelmetProvider } from 'react-helmet-async';
import Cover from '../../../../Shared/Cover';
import menuimg from '../../../../../assets/menu/banner3.jpg';
import desetimg from '../../../../../assets/menu/dessert-bg.jpeg';
import pizzaimg from '../../../../../assets/menu/pizza-bg.jpg';
import saladimg from '../../../../../assets/menu/salad-bg.jpg';
import soupimg from '../../../../../assets/menu/salad-bg.jpg';
import Popularmenu from '../../Catagories/Popularmenu/Popularmenu';
import useMenu from '../../../../../Hooks/useMenu';
import Sectionstittle from '../../../../../components/Sectionstittle';
import Menucategory from '../Menucategory/Menucategory';

const Menu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category == 'dessert'); 
    const soup = menu.filter(item => item.category == 'soup'); 
    const salad = menu.filter(item => item.category == 'salad'); 
    const pizza = menu.filter(item => item.category == 'pizza'); 
    const offered = menu.filter(item => item.category == 'offered'); 



    return (
        <div>
        <Helmet>
        <title>Bristo | Menu</title>
        
      </Helmet>
      <Cover img={menuimg} title="Our Menu" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam itaque ducimus ratione ullam. Exercitationem facere voluptatem beatae corrupti, assumenda eaque voluptatum optio aliquid necessitatibus."></Cover>
<Sectionstittle subHeading="Dont miss" heading="today's offer"></Sectionstittle>
    <Menucategory items={offered}></Menucategory>
          <Menucategory items={dessert} title="dessert" img={desetimg}></Menucategory> 
          <Menucategory items={pizza} title="pizza" img={pizzaimg}></Menucategory> 
          <Menucategory items={salad} title="salad" img={saladimg}></Menucategory> 
          <Menucategory items={soup} title="soup" img={soupimg}></Menucategory> 
        </div>
    );
};

export default Menu;
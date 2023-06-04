import { useState } from "react";
import ordercover from "../../assets/shop/banner2.jpg"
import Cover from "../Shared/Cover";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../Hooks/useMenu";
import Foodcard from "../../components/Foodcard";
import Ordertab from "./Ordertab";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Order = () => {
    const catagories = ['salad', 'pizza' ,  'soup' , 'dessert' , 'drinks'];
    const {category} = useParams();
    const initialIndex = catagories.indexOf(category);
    const [tabindex,setTabindex] = useState(initialIndex);
    const [menu] = useMenu();
    
    const dessert = menu.filter(item => item.category == 'dessert'); 
    const soup = menu.filter(item => item.category == 'soup'); 
    const salad = menu.filter(item => item.category == 'salad'); 
    const pizza = menu.filter(item => item.category == 'pizza'); 
    const offered = menu.filter(item => item.category == 'offered'); 
    const drinks = menu.filter(item => item.category == 'drinks'); 


    return (
        <div>
          <Helmet>
        <title>Bristo | Order</title>
        
      </Helmet>
            <Cover img={ordercover} title="Order food"></Cover>
            <Tabs defaultIndex={tabindex} onSelect={(index) =>setTabindex(index)}>
  <TabList>
    <Tab>salad</Tab>
    <Tab>Pizza</Tab>
    <Tab>Soup</Tab>
    <Tab>Dessert</Tab>
    <Tab>Drinks</Tab>
  </TabList>
  <TabPanel>
<Ordertab items={salad}></Ordertab>
  </TabPanel>
  <TabPanel>
  <Ordertab items={pizza}></Ordertab>
  </TabPanel>
  <TabPanel>
  <Ordertab items={soup}></Ordertab>
  </TabPanel>
  <TabPanel>
  <Ordertab items={dessert}></Ordertab>
  </TabPanel>
  <TabPanel>
  <Ordertab items={drinks}></Ordertab>
  </TabPanel>
</Tabs>
        </div>
    );
};

export default Order;
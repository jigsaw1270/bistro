import React, { useEffect, useState } from 'react';
import Sectionstittle from '../../../../../components/Sectionstittle';
import Menuitem from '../../../../../components/Menuitem';

const Popularmenu = () => {

    const [menu , setMenu] = useState([]);
    useEffect( () => {
        fetch('menu.json')
        .then(res=>res.json())
        .then(data=>{
            const popularItems = data.filter(item => item.category === 'popular');
            setMenu(popularItems)
        })

    }, [] )
    return (
       <section className='mb-12 text-center'>

<Sectionstittle heading={'From our menu'}
subHeading={"Popular Items"}>

</Sectionstittle>
<div className='grid gap-10 md:grid-cols-2'>
  {
    menu.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
  }
</div>
  <button className="my-4 border-0 border-b-4 btn btn-outline">View Full Menu</button>
       </section>
    );
};

export default Popularmenu;
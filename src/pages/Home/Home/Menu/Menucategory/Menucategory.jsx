import React from 'react';
import Cover from '../../../../Shared/Cover';
import Menuitem from '../../../../Shared/Menuitem';


const Menucategory = ({items, title,img}) => {
    const subt = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi possimus qui deleniti nemo accusantium! Omnis quaerat similique sunt vel illo nostrum cum rem qui nulla?'
    return (
        <div className='pt-8'>
          {
            title &&   <Cover img={img} title={title} subtitle={subt}></Cover>

          }
          <div className='grid gap-10 my-16 md:grid-cols-2'>
          {
          items.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
          }
          </div>
        </div>
    );
};

export default Menucategory;

import Sectionstittle from '../../../../../components/Sectionstittle';

import useMenu from '../../../../../Hooks/useMenu';
import Menuitem from '../../../../Shared/Menuitem';

const Popularmenu = () => {

  const [menu] = useMenu();
  const popular = menu.filter(item => item.category == 'popular')

    
    return (
       <section className='mb-12 text-center'>

<Sectionstittle heading={'From our menu'}
subHeading={"Popular Items"}>

</Sectionstittle>
<div className='grid gap-10 md:grid-cols-2'>
  {
   popular.map(item => <Menuitem key={item._id} item={item}></Menuitem>)
  }
</div>
  <button className="my-4 border-0 border-b-4 btn btn-outline">View Full Menu</button>
       </section>
    );
};

export default Popularmenu;
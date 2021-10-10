import React from 'react';
import IPage from '../interfaces/page';
// import logging from '../config/logging';
import * as obj from '../lib/objLib';

const menu = [
{ 
  id: '1',
  title: 'Appointments',
  menu: [
    {
      id: '2',
      title: 'Medical',
      menu: [
        {
          id: '3',
          title: 'Check-up',
          data: {
            firstname: 'Samuel',
            lastname: 'Tompson',
            whatsapp: '+34932209092',
            email: 'medical@email.com'
          }
        }
      ]
    },
    {
      id: '4',
      title: 'Therapy',
      menu: [
        {
          id: '5',
          title: 'Physiotherapy',
          data: {
            firstname: 'Samuel',
            lastname: 'Tompson',
            whatsapp: '+34932209092',
            email: 'medical@email.com'
          }
        },
      ]
    }
  ]
},
{ 
  id: '6',
  title: 'Football',
  menu: [
    {
      id: '7',
      title: 'Equipment',
      menu: [
        {
          id: '8',
          title: 'Check-up',
          data: {
            firstname: 'Samuel',
            lastname: 'Tompson',
            whatsapp: '+34932209092',
            email: 'medical@email.com'
          }
        }
      ]
    }
  ]
}
];
    

const HomePage: React.FunctionComponent<IPage> = props => {

    function updateObj(menu: Array<any>) {
      const data: any = {
        obj: menu,
        key: {
          id: '2'
        },
        replace: {
          title: 'XXXXXXXXXX',
          firstname: 'Claudio',
          lastname: 'Garaycochea',
        }
      };

      /* 
      // Get a key value from a JSON, ex: data.firstname the key is "firstname"
      console.log('data.key count: ', Object.keys(data.replace).length);
      console.log('data.key 0: ', Object.keys(data.key)[0]);
      const key_name: string = Object.keys(data.key)[0];
      console.log('data.key value 0: ', data.key[key_name]);
      */

      const menu_updated: any = obj.updateObject(data.obj, data.key, data.replace);
      console.log('menu: menu_updated: ', menu_updated);
      
      const data_selection: any = {
        obj: menu,
        key: {
          id: '2'
        },
        replace: {
          title: 'XXXXXXXXXX',
          firstname: 'Claudio',
          lastname: 'Garaycochea',
        }
      };

      const menu_selected = obj.getObject(data_selection.obj, data_selection.key, data_selection.replace);
      console.log('menu: menu_selected: ',menu_selected);
    }

    updateObj(menu);

    return (<div>
        <h1>TESTING PAGE</h1>
        <div>
        </div>
    </div>)
}

export default HomePage;
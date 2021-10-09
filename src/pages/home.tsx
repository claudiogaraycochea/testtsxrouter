import React from 'react';
import IPage from '../interfaces/page';
// import logging from '../config/logging';


const menu = [
{ 
  id: 1,
  title: 'Appointments',
  menu: [
    {
      id: 2,
      title: 'Medical',
      menu: [
        {
          id: 3,
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
      id: 4,
      title: 'Therapy',
      menu: [
        {
          id: 5,
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
  id: 6,
  title: 'Football',
  menu: [
    {
      id: 7,
      title: 'Equipment',
      menu: [
        {
          id: 8,
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

    console.log('menu', menu);
    updateObj(menu);

    function getObjects(obj:any, key: any, val: any) {
      var objects:any[] = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] == 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i === key && obj[key] === val) {
          objects.push(obj);
        }
      }
      return objects;
    }

    function updateObj (menu: Array<any>) {
      /*menu.forEach(item => {
        for(let k in item) {
          console.log('>>>>> k: ', k);
          if(item['id']===2) {
            item['title'] = 'XXXXXXXXXXXXX'
          }       
        }
      });*/
      const obj = menu;
      const key = 'id';
      const val = 5;
      const menu_updated = getObjects(obj, key, val);
      // const selection = menu.map(item => item.id === 2);
      console.log('menu updated: menu_updated: ', menu_updated);
    }

    return (<div>
        <h1>TESTING PAGE</h1>
        <div>
          
        </div>
    </div>)
}

export default HomePage;
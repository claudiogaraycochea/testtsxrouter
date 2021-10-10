import React from 'react';
import IPage from '../interfaces/page';
// import logging from '../config/logging';


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

    console.log('menu', menu);
    updateObj(menu);

    function getObject(obj: any, key:any, replace : any) {
      var objects:any[] = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
          objects = objects.concat(getObject(obj[i], key, replace));
        } else if (i === Object.keys(key)[0] && obj[Object.keys(key)[0]] === key[Object.keys(key)[0]]) {
          // obj['title']='jjjjjjjjjjjjjjjjjj';
          objects.push(obj);
        }
      }
      return objects;
    }
    // https://javascript.tutorialink.com/find-and-update-in-nested-json-object/

    function updateObject(obj: any, key:any, replace : any) {
      var objects:any[] = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
          objects = objects.concat(updateObject(obj[i], key, replace));
        } else if (i === Object.keys(key)[0] && obj[Object.keys(key)[0]] === key[Object.keys(key)[0]]) {
          for (let i=0; i < Object.keys(replace).length; i++) {
            obj[Object.keys(replace)[i]]=replace[Object.keys(replace)[i]];
          }
          objects.push(obj);
        }
      }
      return obj;
    }

    function updateObj (menu: Array<any>) {
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

      console.log('>>>>>> data.key count: ', Object.keys(data.replace).length);
      console.log('data.key 0: ', Object.keys(data.key)[0]);
      const key_name: string = Object.keys(data.key)[0];
      console.log('data.key value 0: ', data.key[key_name]);
      const menu_updated: any = updateObject(data.obj, data.key, data.replace);

      //const menu_updated = setObjects(obj, key, val, 'ddddddddddddd');
      console.log('menu updated: menu_updated: ', menu_updated);
      
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
      const menu_selected = getObject(data_selection.obj, data_selection.key, data_selection.replace);
      console.log(menu_selected);
    }

    return (<div>
        <h1>TESTING PAGE</h1>
        <div>
        </div>
    </div>)
}

export default HomePage;
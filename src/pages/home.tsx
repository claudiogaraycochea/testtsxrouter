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

    function getObjects(obj:any, key: any, val: any) {
      var objects:any[] = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
          objects = objects.concat(getObjects(obj[i], key, val));
        } else if (i === key && obj[key] === val) {
          obj['title']='jjjjjjjjjjjjjjjjjj';
          objects.push(obj);
        }
      }
      return obj;
    }
    // https://javascript.tutorialink.com/find-and-update-in-nested-json-object/

    function updateObject(obj: any, key:any, replace : any) {
      var objects:any[] = [];
      for (var i in obj) {
        if (!obj.hasOwnProperty(i)) continue;
        if (typeof obj[i] === 'object') {
          objects = objects.concat(updateObject(obj[i], key, replace));
        } else if (i === Object.keys(key)[0] && obj[Object.keys(key)[0]] === key[Object.keys(key)[0]]) {
          obj[Object.keys(replace)[0]]=replace[Object.keys(replace)[0]];
          obj[Object.keys(replace)[1]]=replace[Object.keys(replace)[1]];
          objects.push(obj);
        }
      }
      return obj;
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
      /*const key = 'id';
      const val = 1;
      const menu_updated = getObjects(obj, key, val);*/

      const data: any = {
        obj: menu,
        key: {
          id: '7'
        },
        replace: {
          title: 'XREARAEWRWREWRAEWRE',
          firstname: 'Claudio'
        }
      };

      console.log('data.key 0: ', Object.keys(data.key)[0]);
      const key_name: string = Object.keys(data.key)[0];
      console.log('data.key value 0: ', data.key[key_name]);
      const menu_updated: any = updateObject(data.obj, data.key, data.replace);


      //const menu_updated = setObjects(obj, key, val, 'ddddddddddddd');
      console.log('menu updated: menu_updated: ', menu_updated);
    }

    return (<div>
        <h1>TESTING PAGE</h1>
        <div>
          
        </div>
    </div>)
}

export default HomePage;
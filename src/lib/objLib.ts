export function getObject(obj: any, key:any, replace : any) {
    var objects:any[] = [];
    for (var i in obj) {
      if (!obj.hasOwnProperty(i)) continue;
      if (typeof obj[i] === 'object') {
        objects = objects.concat(getObject(obj[i], key, replace));
      } else if (i === Object.keys(key)[0] && obj[Object.keys(key)[0]] === key[Object.keys(key)[0]]) {
        objects.push(obj);
      }
    }
    return objects;
  }

export function updateObject(obj: any, key:any, replace : any) {
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
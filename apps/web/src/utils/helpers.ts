import _ from 'lodash';
function removeUndefinedData(query: any) {
  Object.keys(query).forEach(
    (key) => {
      _.isEmpty(typeof query[key] == 'number' ? String(query[key]) : query[key]) && delete query[key];
    }
  );
  return query;
}
export function encodeQueryData(data) {
  data = removeUndefinedData(data)
  const ret: any = [];
  for (let d in data)
    ret.push(encodeURIComponent(d) + '=' + encodeURIComponent(data[d]));
  return ret.join('&');
}

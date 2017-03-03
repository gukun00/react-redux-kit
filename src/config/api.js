let host;

if(process.env.NODE_ENV == "test"){
  host = "http://localhost:4000";
}else{
  host = location.origin;
}

host = "http://localhost:8081";

const baseUri = host + "/WebProxy/";
export const API_CONFIG = {
  host: host,
  baseUri: baseUri,
  auth: 'TestProxy.ashx',
  users: 'TestProxy.ashx',
  menus:'TestProxy.ashx'
};

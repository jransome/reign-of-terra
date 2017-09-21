export const SQUARE_HEIGHT_WIDTH = 0.003;
export const GRID_HEIGHT = 2;
export const GRID_WIDTH = 3;
export const MAP_ORIGIN = {
  bottomLatitude: 51.458,
  leftLongitude: -0.210,
};

import * as firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyCO9wrOCauga078hzCPf29q5a_hq1HPvVE",
  authDomain: "reign-of-terra-71a8a.firebaseapp.com",
  databaseURL: "https://reign-of-terra-71a8a.firebaseio.com",
  storageBucket: "reign-of-terra-71a8a.appspot.com"
};
export const firebaseApp = firebase.initializeApp(firebaseConfig);

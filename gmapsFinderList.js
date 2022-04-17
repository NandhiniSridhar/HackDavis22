import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbOfuO5c8l2ji2UBBGlAoEr8wHdLL3XLg",
  authDomain: "helping-hand-bbbaf.firebaseapp.com",
  projectId: "helping-hand-bbbaf",
  storageBucket: "helping-hand-bbbaf.appspot.com",
  messagingSenderId: "905591168700",
  appId: "1:905591168700:web:243f434809a4225ea0bab9",
  measurementId: "G-FCCLBPW3ZQ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Get a list of cities from your database
async function getFoodBanks(db) {
  const foodBanksCol = collection(db, 'Food Banks');
  const foodBanksSnapshot = await getDocs(foodBanksCol);
  const foodBanksList = foodBanksSnapshot.docs.map(doc => doc.data());
  return foodBanksList;
}

CONFIGURATION = {
  "locations": getFoodBanks(db),
  
    "mapOptions": {"center":{"lat":38.0,"lng":-100.0},"fullscreenControl":true,"mapTypeControl":false,"streetViewControl":false,"zoom":4,"zoomControl":true,"maxZoom":17},
    "mapsApiKey": "AIzaSyAGVZtNgRySaf0LB7lpT1MfAddZm55xAnA",
    "capabilities": {"input":true,"autocomplete":true,"directions":false,"distanceMatrix":true,"details":false}
};

function initMap() {
    new LocatorPlus(CONFIGURATION);
}
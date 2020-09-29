import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA6bpttcNHtvZn6S1pu9rVW6Gp86WG5QBc",
    authDomain: "nba-react-d9e06.firebaseapp.com",
    databaseURL: "https://nba-react-d9e06.firebaseio.com",
    projectId: "nba-react-d9e06",
    storageBucket: "nba-react-d9e06.appspot.com",
    messagingSenderId: "989177128514",
    appId: "1:989177128514:web:1893bd3574dddf86b36fdb",
    measurementId: "G-VTN19FPTEZ"
  };

  firebase.initializeApp(firebaseConfig);

  const firebaseDB = firebase.database();
  const firebaseArticles = firebaseDB.ref('articles');
  const firebaseTeams = firebaseDB.ref('teams');
  const firebaseVideos = firebaseDB.ref('videos');

  const firebaseLooper = (snapshot) =>{
    const data=[];
            snapshot.forEach((childSnapshot)=>{
                data.push({
                    ...childSnapshot.val(),
                    id:childSnapshot.key
                })
            })
    return data;
  }

  

  export {
      firebase, firebaseDB, firebaseArticles, firebaseTeams, firebaseVideos,firebaseLooper
  }
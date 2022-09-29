import React, {useState} from 'react';
import {collection} from 'firebase/firestore';

export default function ListUsers(){

  const [users, setUsers] = useState([]);

  function getUsers(){
    const 
  }

  const userCol = collection(db, 'user'); //referencing user collection in firestore
//do the same for every database collection (which resembles a database table)

getDocs(userCol).then((snapshot) => {
  console.log(snapshot.docs);
});

}

return(
  <div>
    <h2>Awe</h2>
     </div>
)
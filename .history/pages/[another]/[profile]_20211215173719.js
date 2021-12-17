import React,{useEffect,useState} from 'react'

const anotherProfile = () => {
    const [anotherUser,setAnotherUser] = useState([])
    useEffect(()=>{
        getAnotherUser()
    },[])

// 他人のユーザーの取得
  const getAnotherUser = () => {
    let newItem = [];

    db.collection("users")
      .doc(another)
      .get()
      .then((doc) => {
        newItem.push({
          id: another,
          img: doc.data().img,
          name: doc.data().name,
          likeCount: doc.data().likeCount,
        });
        setAnotherUser(newItem);
      });
  };

    return (
        <div>
            
        </div>
    )
}

export default anotherProfile

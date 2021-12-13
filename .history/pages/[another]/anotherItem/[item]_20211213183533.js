import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";

const item = () => {
const [anotherItem,setAnotherItem] =useState([])
  const router = useRouter();
  const { another, item } = router.query();

  useEffect(() => {
    if (another && item) {
      getAnotherItem();
    }
  }, [another, item]);

  const getAnotherItem = () => {
    let newItem =[]
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
            newItems.push({
                title:doc.data().title,

            })
            setAnotherItem(newItem)
        });
      });
  };

  return (
    <div>
      <h1>itemページ</h1>
      {anotherItem.length > 0 && anotherItem.map((item,index)=>(
          <div key={index}>
              
          </div>
      ))}
    </div>
  );
};

export default item;

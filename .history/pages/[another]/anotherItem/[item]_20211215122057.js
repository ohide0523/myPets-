import Link from "next/link"
import React, { useState, useEffect, useContext } from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";
import { Context } from "../../../components/Context";
import Styles from "../../../styles/Home.module.css"

const item = () => {
  const [anotherItem, setAnotherItem] = useState([]);
  const router = useRouter();
  const { another, item } = router.query;
  const { uid } = useContext(Context);

  useEffect(() => {
    if (another && item) {
      getAnotherItem();
    }
  }, [another, item]);

  const getAnotherItem = () => {
    let newItem = [];
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .get()
      .then((doc) => {
        newItem.push({
        img:doc.data().img,
          title: doc.data().title,
          id: doc.data().id,
        });
        setAnotherItem(newItem);
      });
  };

  return (
    <div>
      <h1>itemページ</h1>
      {anotherItem.length > 0 &&
        anotherItem.map((item, index) => (
          <div key={index} className={Styles.another_item_page_container}>
            <img src={item.img} alt="ワンちゃんの画像" style={{width:"90%",height:"30%",borderRadius:20}}/>
            <h1>{item.title}</h1>
            <h2></h2>
            {another === uid && (
              <Link
                href="/myTool/edit/[editItem]"
                as={`/myTool/edit/${item.id}`}
              >
                <button>itemを編集する</button>
              </Link>
            )}
          </div>
        ))}
    </div>
  );
};

export default item;

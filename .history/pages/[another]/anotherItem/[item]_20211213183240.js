import React from "react";
import { useRouter } from "next/router";
import { db } from "../../../components/firebase";

const item = () => {
  const router = useRouter();
  const { another, item } = router.query();

  useEffect(() => {
    if (another && item) {
      getAnotherItem();
    }
  }, [another, item]);

  const getAnotherItem = () => {
    let newItems =[]
    db.collection("users")
      .doc(another)
      .collection("items")
      .doc(item)
      .get()
      .then((snapshot) => {
        snapshot.forEach((doc) => {
            newItems.push({
                title:doc.data().tit
            })
        });
      });
  };

  return (
    <div>
      <h1>itemページ</h1>
    </div>
  );
};

export default item;

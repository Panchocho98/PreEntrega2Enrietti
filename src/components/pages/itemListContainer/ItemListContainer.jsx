import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import { getDocs, collection, query, where } from "firebase/firestore";
import { database } from "../../../firebaseConfig";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    let productsCollection = collection(database, "products");

    let consulta = [];

    if (!categoryName) {
      consulta = productsCollection;
    } else {
      consulta = query(
        productsCollection,
        where("category", "==", categoryName)
      );
    }

    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((product) => {
        return { ...product.data(), id: product.id };
      });
      setItems(newArray);
    });
  }, [categoryName]);

  return (
    <>
      {items.length === 0 ? (
        <div style={{ display: "flex", gap: 20 }}>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
          <div>
            <Skeleton variant="rectangular" width={300} height={400} />
          </div>
        </div>
      ) : (
        <ItemList items={items} />
      )}
    </>
  );
};

export default ItemListContainer;

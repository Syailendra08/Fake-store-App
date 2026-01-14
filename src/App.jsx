import { useState } from "react";
import BannerComp from "./components/BannerComp";
import CardList from "./components/CardList";
import { Button } from "flowbite-react";
import { Link } from "react-router-dom";
 


 function App() {
 const[categories, setCategories] =useState(['a', 'b', 'c','d']);
 const[products, setProducts] = useState(['a', 'b', 'c','d']);

  return (
    <>
   
    <BannerComp/>
    <CardList data={categories} type="category"  />
    <CardList data={products} type="product">
      <div className="flex justify-between mb-5 mt-8">
        <h5 className="text-xl font-bold">Daftar Produk Populer</h5>
        <Link to= "/products"> 
        <Button color="blue">Lihat Selengkapnya </Button>
        </Link>
      </div>
    </CardList>
   
  </>
  );
}
export default App;


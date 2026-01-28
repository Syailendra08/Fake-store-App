import { Spinner } from "flowbite-react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import CardList from "../components/CardList";
import SearchComp from "../components/SearchComp";
import DropdownComp from "../components/DropdownComp";
import PaginationComp from "../components/PaginationComp";

export default function ProductCategory () {
   const{categoryId} = useParams();
   const [products, setProducts] = useState ([]);
   const [loading, setLoading] = useState (true);
   const [search, setSearch] = useState("");
   const [currentPage, setCurrentPage] = useState(1);

    const onPageChange = (page) => {
        
        setCurrentPage(page);
        // tidak mengirim param url, karena uda di url = function suda h ada cureent page dari set 
        getProducts();

    };

    function processSearch(event) {
        setSearch(event.target.value);
        let url = "https://api.escuelajs.co/api/v1/products?categoryId=" + categoryId + "&title=" + search;
        getProducts(url);
        setLoading(true);
    }

   async function getProducts(url = "https://api.escuelajs.co/api/v1/products/?categoryId=" + categoryId + "&limit=8" + "&offset=" + ((currentPage))) {
  try {
const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const result = await response.json();
    setProducts(result);
    setLoading (false);

  } catch(error) {
    console.error(error.message);


  }
}
   function processSort(type) {
        //console.log(type);
        
        // copy isi products ke name baru agar terdeteksi di setProducts untuk memunculkan tampilan produk baru (sesuai sort)
        let productNew = [...products];
        if (type == "harga termurah") {
            productNew.sort(function(a, b){return a.price - b.price});
        } else if (type == "harga termahal") {
            productNew.sort(function(a, b){return b.price - a.price});
        } else if (type == "alfabet menurun" ) {
            productNew.sort((a,b) => a.title.toLowerCase().localeCompare(b.title.toLowerCase()));
        } else if (type == "alfabet menaik" ) {
            productNew.sort((a,b) => b.title.toLowerCase().localeCompare(a.title.toLowerCase()));
        }
        setProducts(productNew);
    }

 
 useEffect(() => {
    getProducts();
 }, [])

 
    return (
      <>
        <div className="px-10 py-5">
        <h1 className="text-4xl font-bold flex justify-center mb-3"  >Produk Kategori {products[0]?.category?.name}</h1>
         <div className="flex gap-2 mt-5 mb-5">
                    <SearchComp processSearch={processSearch}/>
                    <DropdownComp processSort={processSort} />
                </div>
                { loading ? (
                    <div className="flex justify-center mt-90" size="s">
                  <Spinner aria-label="Default status example" />
                  Sedang mengambil data...
                </div>
                ) : (<CardList data={products} type="product"></CardList>)
            }
               <div className="mt-5 mb-5">
                <PaginationComp currentPage={currentPage} onPageChange={onPageChange} />
               </div>
                </div>
                
        
        </>
     );
}
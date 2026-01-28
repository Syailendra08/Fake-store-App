import { TextInput } from "flowbite-react";
import { IoIosSearch } from "react-icons/io";

export default function SearchComp( { processSearch }) {
    return (
        <TextInput className="w-5xl" type="text" icon={IoIosSearch} placeholder="Cari nama produk...."  onKeyUp={processSearch} />
    )
}
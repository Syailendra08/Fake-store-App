import CardComp from "./CardComp";
import CardCommerce from "./CardCommerce";

export default function CardList({data, type, children}) {
    return (
        <div className="block mx-auto w-4xl">
            {children}
            <div className="grid grid-cols-4 gap-4">
                {
                data.map((item, index) => type == "category" ? (<CardComp key={index} item={item} />) : (<CardCommerce key={index} />))
            }
            </div>
        </div>
    )
    
}
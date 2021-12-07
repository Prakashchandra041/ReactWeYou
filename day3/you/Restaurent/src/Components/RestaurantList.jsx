import { useState } from "react"
import data from "../db.json"
import { RestaurantDetail } from "./RestaurantDetails";
export const RestaurantList = () => {
    const [details, setDetails] = useState(data.restaurant);
    const [filterByRating, setFilterByRating] = useState(0);
    const [payMethods, setPayMethods] = useState("all");
    const [sortByCost, setSortByCost] = useState(null);
    const [perPage, setperPage] = useState(3);
    const [activePage, setActivePage] = useState(1);
    // console.log(details);
    const filterCondition = ({rating,payment_methods},index) => {
        const { card, cash } = payment_methods;
        let paymentCondition = true;
        if (payMethods === "card") {
            paymentCondition = card ? true : false;
        }
        else if (paymentCondition === "cash") {
            paymentCondition = cash ? true : false;
        }
        //page conditions
        const offset = (activePage - 1) * perPage;
        const pageCondtion = index >= offset && index < offset + perPage;

        return rating >= filterByRating && paymentCondition&&pageCondtion;
    }

    const sortCondtion = (a,b) => {
        if (sortByCost === null) {
            return
        }
        else if (sortByCost === "asc") {
            return a.costForTwo - b.costForTwo;
        }
        else if (sortByCost === "desc") {
            return b.costForTwo - a.costForTwo;
        }
    }
    const totalPages = Math.ceil(details.length / perPage);

    return (
        <div>

            {[4,3,2,1,0].map((rating,i) =>
                <button onClick={()=>setFilterByRating(rating)}>{rating===0?"ALL":rating+" AND ABOVE"}</button>
            )}
            <br /><br />

            {["cash", "card", "all"].map((method, i) => 
                <button onClick={()=>setPayMethods(method)}>{ method}</button>
            )}
            <br /><br />

            {["asc", "desc"].map((order) => <button onClick={() => setSortByCost(order)}>{order}</button>)}
            <br /><br />
            {new Array(totalPages).fill(0).map((el, idx) => {
               return <button key={idx} onClick={()=>setActivePage(idx+1)}>Page No{ idx+1}</button>
            })}

            <hr />

            {
             details&&details?.filter(filterCondition).sort(sortCondtion).map((item,idx)=><RestaurantDetail key={item.id} data={item}></RestaurantDetail>)
            }
        </div>
    )
}
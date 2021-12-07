export const RestaurantDetail = ({ data }) => {
  console.log(data);
  const {
    name,
    id,
    desilveryTime,
    costForTwo,
    cuisins,
    minOrder,
    payment_methods,
    rating,
    votes,
    reviews,
    src,
  } = data;
    const { cash, card } = payment_methods;


// json-server --watch db.json --port 3001
    
  return (
      <div style={{ border: "1px solid grey", margin: "10px" }}>
          <img src={src} alt="pic" style={{width:"100px",height:"100px"}} />
          <p>{name}</p>
          <p>Rating-{rating}</p>
          <p>Payment-Method-{cash && "CASH"}{card && "CARD"}</p>
          <p>Cost for two - { costForTwo}</p>
          
    </div>
  );
};

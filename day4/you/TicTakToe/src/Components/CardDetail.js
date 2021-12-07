


export const CardDetail = ({ prop, toggleProp }) => {
    console.log(prop, toggleProp);
    function changeToNextPage() {
        toggleProp()
    }
    return (
      <>
        <div id="outterBox" style={{ backgroundColor: prop[5] }}>
          <div id="leftBox">
            <p>{prop[0]}</p>
            <div id="caseStudy">Case Study</div>
            <h1>{prop[1]} Gift</h1>
            <h1>{prop[2]}</h1>
            <p>{prop[0]} - Mobile</p>
          </div>
          <div id="rightBox">
            <div>
               <img style={{ width: "80px", height: "80px" }} src={prop[3]} alt="image1"></img>
            </div>
            <div>
              <img style={{ width: "40px", height: "40px"}} src="rightarrow.jpg" alt="image2" id="arrow" onClick={changeToNextPage}></img>
             </div>
           
          </div>
        </div>
      </>
    );
};



function CatCard({name, img, text}) {

return(

        <div className="cards">
            <div id="cat-basket" className="cat-basket">
                 <div className="card-info">            
                    <img src={img} className="pic"/>
                </div>
                <h4>{name}</h4> 
                <p>{text}</p>  
            </div>      
        </div>
)

}

export default CatCard


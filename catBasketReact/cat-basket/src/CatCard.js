
function CatCard({name, img, text}) {

return(

     
            <div id="cat-basket" className="cat-basket">
                 <div className="card-info">            
                    <img src={img} className="pic"/>
                </div>
                <h4>{name}</h4> 
                <p>{text}</p>  
            </div>      
       
)

}

export default CatCard




const cats = [
    {
        name: 'Pumpkin',
        img: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'Once upon the time there was a cat'
    },
    {
        name: 'Snuggles',
        img: 'https://images.unsplash.com/photo-1546180572-28e937c8128b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
        text: 'Once upon the time there was a cat'
    },
    {
        name: 'Cruella',
        img: 'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        text: 'Once upon the time there was a cat'
    }
]

// const catCard = cats.map( function(item) {
//     return <h4>item.name</h4> 
    
// })
// console.log(catCard)

cats.forEach(item => {
    const catInfoCard = `<div class="cards"> 
            <div class="cat-basket">
                <div class="card-info">  
                    <img class="pic" src=${item.img} />
                </div>
                <h4>${item.name}</h4>
                <p>${item.text}</p>
            </div>
    <div>`
    
    const content = document.createElement('div')
    content.innerHTML = catInfoCard
    content.style.background = "#444"
    // const newDiv = document.querySelector('#container')
    // newDiv.className="container"
    // newDiv.style.background ="#222"
    document.body.appendChild(content)
    
})

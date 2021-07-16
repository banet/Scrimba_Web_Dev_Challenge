

const cats = [
    {
        name: 'Pumpkin',
        img: 'https://images.unsplash.com/photo-1569591159212-b02ea8a9f239?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'I am going to the beach!'
    },
    {
        name: 'Snuggles',
        img: 'https://images.unsplash.com/photo-1546180572-28e937c8128b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=675&q=80',
        text: 'She looked araound and saw, there..'
    },
    {
        name: 'Cruella',
        img: 'https://images.unsplash.com/photo-1536589961747-e239b2abbec2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
        text: 'Once upon the time there was a cat'
    },
    {
        name: 'Gimzy',
        img: 'https://images.unsplash.com/photo-1588768987479-bcebeefb8a5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Nnx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60',
        text: '...getting bored at home and thought..'
    },
    {
        name: 'Pollie',
        img: 'https://images.unsplash.com/photo-1580784355694-0d5295dcc007?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjV8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'It was summer and the sun was..'
    },
    {
        name: 'Lazy',
        img: 'https://images.unsplash.com/photo-1571988840298-3b5301d5109b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MjJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        text: 'She wa s scared and replied.. '
    },
    
]


const container = document.querySelector('#container')

const cardsElement = document.createElement('div')
cardsElement.className = 'cards'
container.appendChild(cardsElement)

cats.forEach(item => {
    const catInfoCard = `
            <div class="cat-basket">
                <div class="card-info">  
                    <img class="pic" src=${item.img} />
                </div>
                <h4>${item.name}</h4>
                <p>${item.text}</p>
            </div>`
    
    const content = document.createElement('div')  
    content.innerHTML = catInfoCard
    cardsElement.appendChild(content)
    
})

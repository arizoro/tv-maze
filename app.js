const input = document.getElementById('input')
const wrapper = document.querySelector('#wrapper')
const tittle = document.getElementById('tittle')




input.addEventListener('change', async(e)=>{
    document.querySelectorAll('img').forEach((img)=>{ img.remove()

    })
    const serch = input.value
    const config = {
        params: { q : serch}
    }
    const res = await axios.get(` https://api.tvmaze.com/search/shows`,config)

    res.data.map(async(result)=>{
        console.log(result.show)
        const img = document.createElement('img')
        img.src = await result.show.image.medium
        img.style.margin = "10px"
        wrapper.append(img)
    })

    // getTitle(res.data)
    // getImage(res.data)
    
    console.log(res.data)
    
    input.value = ''
})



const getImage = (shows) => {
    for(let result of shows){
        if(result.show.image){
            const img = document.createElement('img')
            img.src = result.show.image.medium
            wrapper.append(img)
            img.style.margin = "10px"
            console.log(result)
            
        }
    }
}
const getTitle = (shows) => {
    for(let res of shows){
        if(res.show.name){
            const judul = document.createElement('h1')
            judul.textContent = res.show.name
            tittle.append(judul)
        }
    }
}

// res.data.map((result,i)=>{
//     console.log(result.show.name,i+1)
//     const name = document.createElement('h2')
//     name.textContent = result.show.name
//     tittle.appendChild(name)
    
// })
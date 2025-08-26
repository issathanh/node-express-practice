const express = require('express')
const app = express()
const {products, people}  = require('./data')

app.get('/',(req,res)=>{
    res.send('<h1>Home Page</h1><a href = "/api/products">products</a>')
})

app.get('/api/products',(req,res)=>{
    //sending everything in product
    // res.json(products)
    // sending product without description
    const newProducts = products.map((product)=>{
        const {id,name,image} = product; //seperate
        return{id,name,image}
    })
    res.json(newProducts)

})
//route parameter :name -> place holder
app.get('/api/products/:productID',(req,res)=>{
    const singleProduct = products.find((product)=>product.id==req.params.productID)
    if(!singleProduct){
        return res.status(404).send('Product Does Not Exist')
    }
    res.json(singleProduct)
})

app.get('/api/products/:productID/reviews/:reviewID',(req,res)=>{
    console.log(req.params)
    res.send('hello world')
})

app.listen('5000',()=>{
    console.log('server is listening')
})
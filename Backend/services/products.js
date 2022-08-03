// const { stripeSecretKey } = require("../config")
const ProductModel = require("../models/product")
// const stripe = require("stripe")(stripeSecretKey)

class Products{

    //Obtenemos todos los productos y realizamos la paginacion

    async getAll(limit=8,page=1){
        const total = await ProductModel.count()
        const totalPages = Math.ceil(total / limit)
        if(page>totalPages || page<1){
            return {
                success:false,
                message:"Page not found"
            }
        }

        const skip = (page-1)*limit

        const products = await ProductModel.find().skip(skip).limit(limit)

        const nextPage = page===totalPages ? null: limit===20?`/api/products?page=${page+1}`:`/api/products?page=${page+1}&limit=${limit}`
        const prevPage = page===1 ? null : limit===20?`/api/products?page=${page-1}`:`/api/products?page=${page-1}&limit=${limit}`

        return {
            success:true,
            data:products,
            total,
            page,
            prevPage,
            nextPage,
            totalPages
        }
        
    }

    async getOne(id){
        try {
            const product = await ProductModel.findById(id)
            return product
        } catch (error) {
        }
    }

    //Metodo para crear el producto

    async create(data){
        const product = await ProductModel.create(data)

        return product
    }

     // Actualiza los datos de un producto a traves de su ID

     async update(id,data){
        
        try{
            const product = await ProductModel.findByIdAndUpdate(id,data,{new:true})
            return product 
        }catch(error){
        }
    }

    //Elimina un producto a partir de su id

    async delete(id){
        try{
            const product = await ProductModel.findByIdAndDelete(id)
            return product 
        }catch(error){
        }
    }
   

}


module.exports = Products 
const products = require('../model');

const resolvers = {
    Query:{
        test(){
            return "How's it going?"
        },
        getAll(){
            return products
        },
        getOne(parent, args, context){
            return products.find(product=>product.id === +args.id)
        }
    }
}

module.exports = resolvers;
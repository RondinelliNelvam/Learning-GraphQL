const { ApolloServer, gql } = require('apollo-server')
const userSchema = require('./user/schema/user.graphql')
const usersResolvers = require('./user/resolvers/userResolvers')
const UsersAPI = require('./user/datasource/user')
const typeDefs = [userSchema]

const resolvers = [usersResolvers]


const server = new ApolloServer( { typeDefs, resolvers, dataSources: () =>{return {
    usersAPI: new UsersAPI()
}} } )

server.listen().then(({url}) =>{
    console.log("ta funfando coroi, "+url)
})
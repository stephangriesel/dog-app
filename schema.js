const axios = require('axios');

const { GraphQLObjectType, GraphQLString, GraphQLSchema, GraphQLList } = require('graphql');

const DogType = new GraphQLObjectType({
    name: 'Breeds',
    fields: () => ({
        status: { type: GraphQLString }
    })
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        breeds: {
            type: new GraphQLList(DogType),
            resolve(parent,args) {
                return axios.get('https://dog.ceo/api/breeds/list/all')
                .then(res = res.data);
            }
        }

    }
});

module.exports = new GraphQLSchema({
    query: RootQuery
});
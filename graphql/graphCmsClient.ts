import { GraphQLClient } from "graphql-request";

const graphcms = new GraphQLClient(process.env.GRAPH_CMS_CLIENT);

export default graphcms;

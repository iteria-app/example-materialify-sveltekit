import { GRAPHQL_ENDPOINT } from "$lib/env";

export class GraphqlClient {
    constructor(private endpoint) { }
    async executeQuery(query: string, variables = {}) {
        const headers = { 'content-type': 'appliaction/json' };
        const body = JSON.stringify({
            query,
            variables
        });
        const response = await fetch(this.endpoint, {
            method: 'POST',
            headers,
            body
        });
        return response.json();
    }
    query(query: string, variables = {}) {
        return this.executeQuery(query, variables);
    }
    mutation(mutation: string, variables = {}) {
        return this.executeQuery(mutation, variables);
    }
}

export default new GraphqlClient(GRAPHQL_ENDPOINT);
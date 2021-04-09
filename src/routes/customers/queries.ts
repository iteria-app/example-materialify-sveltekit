export const QUERY_CUSTOMERS = `
    query {
        customers {
            id
            name
            email
            phone
            address
            avatarUrl
            createdAt
        }
    }
`;
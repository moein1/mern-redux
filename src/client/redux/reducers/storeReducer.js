export default function reducer(stores = [], action) {
    switch (action.type) {
        case 'GET_STORES':
            return action.stores
        case 'GET_SOTRES_BY_BRANDID':
            return action.stores
        case 'UPDATE_STORE':
            {
                return stores.map((store) => {
                    return store.id === action.store.id ? Object.assign({}, store, {
                        name: action.store.name
                    }) : store
                })
            }

        default:
            return stores;
    }
}
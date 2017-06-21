const constants = {
    GET_BRANDS: 'GET_BRANDS',
    GET_STORES: 'GET_STORES',
    GET_SOTRES_BY_BRANDID: 'GET_SOTRES_BY_BRANDID',
    UPDATE_STORE: 'UPDATE_STORE'
}

let actions = {
    get_brands: function() {
        return (dispath) => {
            window.fetch('/api/brands')
                .then(res => res.json())
                .then(result => {
                    dispath((() => {
                        return {
                            type: constants.GET_BRANDS,
                            brands: result
                        }
                    })())
                });
        }
    },
    get_stores: function() {
        return (dispath) => {
            window.fetch('/api/stores')
                .then(res => res.json())
                .then(result => {
                    dispath((() => {
                        //  console.log('this is stores in actions ',stores);
                        return {
                            type: constants.GET_STORES,
                            stores: result
                        }
                    })())
                });
        }
    },
    get_store_by_brandId: function(brandId) {
        return (dispath) => {
            fetch('/api/brands/' + brandId + '/stores')
                .then(res => res.json())
                .then(stores => {
                    dispath((() => {
                        return {
                            type: constants.GET_SOTRES_BY_BRANDID,
                            stores: stores
                        }
                    })())
                })
        }
    },
    update_store: function(store) {
        return (dispath) => {
            fetch('/api/stores/' + store.storeId, { method: 'PUT', mode: 'CORS', body: JSON.stringify({ name: store.storeName }), headers: { 'Content-Type': 'application/json' } })
                .then(res => res.json())
                .then(store => {
                    dispath((() => {
                        return {
                            type: constants.UPDATE_STORE,
                            store: store
                        }
                    })())
                });
        }
    }
}

export default actions;
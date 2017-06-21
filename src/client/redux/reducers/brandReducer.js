export default function reducer(brands=[],action){
    switch(action.type){
        case 'GET_BRANDS':
            return action.brands;
        default:
        return brands;
    }    
}
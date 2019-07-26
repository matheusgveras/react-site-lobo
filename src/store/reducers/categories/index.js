import apiservice from '../../../config/api'

const CATEGORIES_LIST = {
    listOfCategories: []
}

 function categories (state = CATEGORIES_LIST, action) {
    switch (action) {
        case 'LOADING_CATEGORIES':
            let responseAPIListCategories = [];
            apiservice.get('api_category.php').then(res => {
                responseAPIListCategories = res;
            };
            return {...state, listOfCategories: [...state.listOfCategories,  
                responseAPIListCategories
            ]};
        default:
            return state;
    }
}

export default categories;
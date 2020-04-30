const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Virel';

function getItems(){
    return fetch(`${BASE_URL}/items`)
    //return Promise.resolve('A successful response!');
}

function createItem(name){
    let newItem = {
        name: name,
    };
    let newItemString = JSON.stringify(newItem);
    return fetch(`${BASE_URL}/items`,{
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItemString
    })
}

function updateItem(id, updateData) {
    return fetch(`${BASE_URL}/items/${id}`,{
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(updateData)
    })
}

export default {
    getItems,
    createItem,
    updateItem
};
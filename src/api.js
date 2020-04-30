import store from "./store";

const BASE_URL = 'https://thinkful-list-api.herokuapp.com/Virel';

function listApiFetch(...args) {
    let error;
    return fetch(...args)
        .then(res => {
        if (!res.ok) {
          // Valid HTTP response but non-2xx status - let's create an error!
            error = { code: res.status };
        }
        // In either case, parse the JSON stream:
        return res.json();
        })

        .then(data => {
        // If error was flagged, reject the Promise with the error object
        if (error) {
            error.message = data.message;
            return Promise.reject(error);
        }
        // Otherwise give back the data as resolved Promise
        return data;
        })
    }

function getItems(){
    return listApiFetch(`${BASE_URL}/items`)

};

function createItem(name){
    let newItem = {
        name: name,
    };
    let newItemString = JSON.stringify(newItem);
    return listApiFetch(`${BASE_URL}/items`,{
        method:'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: newItemString
    }) 
};

function updateItem(id, updateData) {
    return listApiFetch(`${BASE_URL}/items/${id}`,{
        method: 'PATCH',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(updateData)
    }) 
};

function deleteItem(id) {
    return listApiFetch(`${BASE_URL}/items/${id}`,{
        method:'DELETE',
        headers: new Headers({'Content-Type': 'application/json'})
    }) 
};

export default {
    getItems,
    createItem,
    updateItem,
    deleteItem
};
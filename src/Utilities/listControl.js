const key = 'movie'
function add_to_list(item){
    if(!localStorage.getItem(key)){//if there is no list, create one
        localStorage.setItem(key, JSON.stringify([item]));
        return
    }
    const current_list = JSON.parse(localStorage.getItem(key));
    if(current_list.includes(item.id)){
        return
    }
    else {
        current_list.push(item.id);
    }
        //if the item is already in the list, do not add it again
    localStorage.setItem(key, JSON.stringify(current_list));
}
function delete_from_list(item){
    // read data from local storage
    const current_list = JSON.parse(localStorage.getItem(key));
    const deleted = current_list.filter((movie) => movie.id !== item.id);
    localStorage.setItem(key, JSON.stringify(deleted));
}
function get_list(){
    // if there is no list, return null
    if(!localStorage.getItem(key)){
        return null
    }
    const list = JSON.parse(localStorage.getItem(key));
    return list
}
export default {add_to_list, delete_from_list}
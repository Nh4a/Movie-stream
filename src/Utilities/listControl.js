const key = "movie";
const list = [];
export function add_to_list(item) {
  let list_movie = [];
  list_movie = JSON.parse(localStorage.getItem(key)) || [];
  if (list_movie.some((m) => m.id === item.id)) return;
  list_movie.push(item);
  localStorage.setItem(key, JSON.stringify(list_movie));
}
export function delete_from_list(item) {
  // read data from local storage
  const current_list = JSON.parse(localStorage.getItem(key));
  const deleted = current_list.filter((movie) => movie.id !== item.id);
  localStorage.setItem(key, JSON.stringify(deleted));
}
export function get_list() {
  // if there is no list, return null
  if (!localStorage.getItem(key)) {
    return null;
  }
  const list = JSON.parse(localStorage.getItem(key));
  return list;
}

const key = "movie";

export function add_to_list(item) {
  let list_movie = [];
  list_movie = JSON.parse(localStorage.getItem(key)) || [];
  if (list_movie.some((m) => m.id === item.id)) return;
  list_movie.push(item);
  localStorage.setItem(key, JSON.stringify(list_movie));
}
export function delete_from_list(id) {
  const current_list = JSON.parse(localStorage.getItem(key));
  const deleted = current_list.filter((movie) => movie.id !== id);
  localStorage.setItem(key, JSON.stringify(deleted));
  window.dispatchEvent(new Event("watchlistChanged"));
}
export function get_list() {
  if (!localStorage.getItem(key)) {
    return null;
  }
  return JSON.parse(localStorage.getItem(key));
}

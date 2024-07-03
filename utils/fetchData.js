export const getData = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {cache: "no-store"});
  
    if(!response.ok){
      throw new Error("Something Went Wrong")
    }
    return response.json()
}

// export const data = [
//   {
//     "userId": 1,
//     "id": 1,
//     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cumreprehenderit molestias ut ut"
//   },
//   {
//     "userId": 2,
//     "id": 2,
//     "title": "qui est esse",
//     "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis"
//   },
//   {
//     "userId": 3,
//     "id": 3,
//     "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
//     "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusan"
//   },
//   {
//     "userId": 4,
//     "id": 4,
//     "title": "eum et est occaecati",
//     "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis"
//   },
//   {
//     "userId": 5,
//     "id": 5,
//     "title": "nesciunt quas odio",
//     "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus"
//   },
//   {
//     "userId": 6,
//     "id": 6,
//     "title": "dolorem eum magni eos aperiam quia",
//     "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciat"
//   },
// ]
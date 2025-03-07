import angular from "angular";

angular.module("apiService", []).service("ApiService", ["$http", function ($http) {
  this.getData = function () {
    return $http.get("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.data)
      .catch(error => {
        console.error("erreur lors de la récupération des data : ", error);
        throw error;
      })
  }

  this.getByID = function (id) {
    return $http.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Erreur lors de la récupération de l' id nméro ${id} : `, error)
        throw error;
      })
  }
}])

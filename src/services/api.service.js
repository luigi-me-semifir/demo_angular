import angular from "angular";

angular.module("apiService", []).service("ApiService", ["$http", function ($http) {

  const API_URL = "http://localhost:8000/posts"

  this.getData = function () {
    return $http.get(API_URL)
      .then(response => response.data)
      .catch(error => {
        console.error("erreur lors de la récupération des data : ", error);
        throw error;
      })
  }

  this.getByID = function (id) {
    return $http.get(`${API_URL}/${id}`)
      .then(response => response.data)
      .catch(error => {
        console.error(`Erreur lors de la récupération de l' id nméro ${id} : `, error)
        throw error;
      })
  }

  this.addPosts = function (bodyPosts) {
    return $http.post(API_URL, bodyPosts, {
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(response => response.data)
      .catch(error => {
        console.error(`Erreur lors de l'ajout de posts : ${error}`);
        throw error
      })
  }

  this.deletePost = function (id) {
    console.log("toto", id);

    return $http.delete(`${API_URL}/${id}`)
      .then(response => {
        console.log("Suppression reussis", response);
        return response.data;

      })
      .catch(error => {
        console.error(`Erreur lors de la suppression du post ID ${id} :`, error);
        throw error;
      })
  }
}])

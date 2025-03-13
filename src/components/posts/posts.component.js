import angular from "angular";
import template from "./posts.template.html";
import "../../services/api.service.js"

angular.module("postsComponent", ["apiService"]).component("postsComponent", {
  template,
  controller: ["ApiService", function (ApiService) {
    this.posts = [];


    // ApiService.getData().then(data => {
    //   this.posts = data;
    // })
    this.getPosts = function () {
      ApiService.getData()
        .then(data => {
          this.posts = data;
          console.log("Posts chargé", this.posts);

        })
        .catch(error => {
          console.error(error)
        })
    }

    this.confirmDelete = function (id) {
      if (confirm("Voulez vous supprimer le post d'id : ", id)) {
        this.deletePost(id)
      }
    }


    this.deletePost = function (id) {
      console.log("Envoie de la requete", id)
      ApiService.deletePost(id)
        .then(() => {
          this.posts = this.posts.filter(post => post.id !== id)
        })
        .catch(error => {
          console.error("Erreur lors de la suppression", error)
        })
    }

    this.getPosts()
  },

  ]
})
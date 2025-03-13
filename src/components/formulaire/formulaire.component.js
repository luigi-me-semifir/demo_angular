import angular from "angular";
import template from "./formulaire.template.html"
import "../../services/api.service.js"

angular.module("addPosts", ["apiService"])
  .component("addPosts", {
    template,
    controller: ["ApiService", function (ApiService) {
      this.posts = { title: "", body: "" };
      this.successMessage = "";
      this.errorMessage = "";

      this.register = function () {
        ApiService.addPosts(this.posts)
          .then(data => {
            this.successMessage = "Posts bien enregistré en bdd";
            this.errorMessage = "";
            this.posts = { title: "", body: "" }
          })
          .catch(error => {
            this.errorMessage = "Une erreur est survenue";
            this.successMessage = ""
          })
      }
    }]
  })
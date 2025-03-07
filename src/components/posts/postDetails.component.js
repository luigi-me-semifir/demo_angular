import angular from "angular";
import template from "./postDetails.template.html"
import "../../services/api.service.js"

angular.module("postDetailsComponent", ["apiService"])
  .component("postDetailsComponent", {
    template,
    controller: ["ApiService", "$routeParams", function (ApiService, $routeParams) {
      this.post = null;
      this.loading = true;
      this.error = null;

      const postID = $routeParams.id;

      ApiService.getByID(postID)
        .then(data => {
          this.post = data;
        })
        .catch(error => {
          this.error = "Impossible de récupérer le post"
        })
        .finally(() => {
          this.loading = false
        })

    }]
  })
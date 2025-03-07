import angular from "angular";
import template from "./posts.template.html";
import "../../services/api.service.js"

angular.module("postsComponent", ["apiService"]).component("postsComponent", {
  template,
  controller: ["ApiService", function (ApiService) {
    this.posts = [];
    ApiService.getData().then(data => {
      this.posts = data;
    })
  }]
})
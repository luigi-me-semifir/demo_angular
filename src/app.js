import angular from "angular";
import ngRoute from "angular-route"
import './components/titre/titre.component.js'
import './services/api.service.js'
import './components/posts/posts.component.js'
import './components/posts/postDetails.component.js'
import './components/formulaire/formulaire.component.js'

angular.module('myApp', ["ngRoute", "apiService", 'titreComponent', "postsComponent", "postDetailsComponent", "addPosts"])
  .config(["$routeProvider", function ($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<posts-component></posts-component>"
      })
      .when("/post/:id", {
        template: "<post-details-component></post-details-component>"
      })
      .when("/ajout", {
        template: "<add-posts></add-posts>"
      })
      .otherwise({ redirectTo: "/" })
  }])
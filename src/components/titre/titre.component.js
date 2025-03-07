import angular from "angular";
import { TitreController } from "./titre.controller.js";
import template from "./titre.template.html";
import './titre.styles.css'

console.log("titre.component.js chargé !");

angular.module("titreComponent", [])
  .component("titreComponent", {
    template,
    controller: TitreController
  });

console.log("titreComponent enregistré !");




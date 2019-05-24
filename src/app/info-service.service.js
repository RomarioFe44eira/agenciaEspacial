"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var InfoServiceService = (function () {
    function InfoServiceService(http) {
        this.http = http;
        this.urlBase = 'https://angular-dev-romariofe44eira.c9users.io/';
    }
    ;
    InfoServiceService.prototype.getAstonautas = function () {
        return this.http.get(this.urlBase + 'astronauta');
    };
    ;
    InfoServiceService.prototype.getAstonauta = function (astoId) {
        return this.http.get(this.urlBase + 'astronauta/' + astoId);
    };
    InfoServiceService.prototype.getMissoes = function () {
        return this.http.get(this.urlBase + 'missao');
    };
    ;
    InfoServiceService.prototype.getNaves = function () {
        return this.http.get(this.urlBase + 'naves');
    };
    ;
    InfoServiceService.prototype.getNavesId = function (id) {
        console.log(this.http.get(this.urlBase + 'naves/' + id));
    };
    ;
    InfoServiceService.prototype.postNave = function (id, nome, valor) {
        return this.http.post(this.urlBase + 'naves', {
            "id": id,
            "nome": nome,
            "valor": valor
        })
            .subscribe(function (data) {
            console.log("Requisição POST Success!", data);
        }, function (error) {
            console.log("Error: Request in POST", error);
        });
    };
    InfoServiceService.prototype.updateNave = function (id, nome, valor) {
        this.http.patch(this.urlBase + 'naves/' + id, {
            "id": id,
            "nome": nome,
            "valor": valor
        })
            .subscribe(function (data) {
            console.log("PATCH Request is successful ", data);
        }, function (error) {
            console.log("Error PATCH", error);
        });
    };
    InfoServiceService.prototype.deleteNave = function (id) {
        this.http.delete(this.urlBase + 'naves/' + id)
            .subscribe(function (data) {
            console.log("Request: DELETE is successful ", data);
        }, function (error) {
            console.log("Error DELETE", error);
        });
    };
    InfoServiceService.prototype.deleteAstronauta = function (id) {
        var url = "https://angular-dev-romariofe44eira.c9users.io/astronauta/" + id;
        return this.http.delete(url);
    };
    InfoServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], InfoServiceService);
    return InfoServiceService;
}());
exports.InfoServiceService = InfoServiceService;

(function(window, undefined) {
  var dictionary = {
    "4fd198ed-59ae-4a63-9437-39f7e5c081b1": "InicioUsuario",
    "57adc1c3-aa32-4e3d-9bf2-98b361db73cb": "Detalle Oferta",
    "667faad0-092e-47b1-a674-178de97be8c5": "DetallesEstablecimiento",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LogIn",
    "32231785-f960-4fea-9baf-00b50be60690": "Registro",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "Board 1"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
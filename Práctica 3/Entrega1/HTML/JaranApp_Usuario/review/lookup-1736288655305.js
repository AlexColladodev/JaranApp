(function(window, undefined) {
  var dictionary = {
    "f1a7a4b9-48ff-4d3b-b98e-702315b8c937": "Detalles Establecimiento",
    "9526bae3-49d3-4f0d-81b9-9591d7c09a86": "Registro",
    "b5023f3b-2eb2-4eb9-89ef-0a4c0016a15c": "Detalle Usuario",
    "7cc5525c-9a2d-4b6c-af8b-26e096a51649": "InicioUsuario",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioApp",
    "bf21e357-98ee-4bff-b144-6f9f08bdbaa2": "Detalles Evento u Oferta",
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
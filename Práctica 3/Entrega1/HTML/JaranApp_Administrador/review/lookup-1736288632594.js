(function(window, undefined) {
  var dictionary = {
    "d1ad6d86-c01c-4ca2-99c8-f0d599b8e514": "Crear Oferta o Evento",
    "5446d57e-14a6-4f60-b47b-562ce4f1b934": "InicioAdmin",
    "3edea995-f6bf-498f-9f62-83ab1e59f6f7": "DetallesEstablecimiento",
    "77d032a0-8ca8-4fc4-b678-ae60750cea59": "Registro",
    "9e0638d8-9415-41bf-aea7-bcae29e2ab8e": "Detalle Oferta o Evento",
    "71eac59f-5eb7-4099-b76f-82b6c60cb7bc": "Detalles Administrador Establecimiento",
    "1aa32ff1-e0be-402f-b1f3-3cd0e72c1d2b": "Modificar Establecimiento",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioApp",
    "13778eec-c745-48b6-8df4-d98246121fcd": "CrearEstablecimiento",
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
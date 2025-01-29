(function(window, undefined) {
  var dictionary = {
    "410ba2cf-8836-4b11-931f-75afe355f577": "Registro",
    "30519c82-faf0-4923-a73f-8a65c0e796b0": "DetalleOferta",
    "f50dc55e-4475-4113-b6bb-e6b4aad91a4f": "CrearOferta",
    "1c5f53b7-c7a4-456a-a826-9b86a2179987": "ModificarAdministrador",
    "aa97cdb8-7561-4a48-a9d5-9000b2347ce8": "Modificar Evento",
    "583cefe8-9dcc-4885-a06e-6779d9dcb1ab": "CrearEstablecimiento",
    "e8c324aa-1b8b-4a52-8963-1a8d3810ebd5": "ModificarEstablecimiento",
    "526b632d-198a-433c-900b-cbd90fd83fbf": "CrearEvento",
    "3e6a4a0c-fa5a-4280-aa8d-43ca016f6d6c": "DetalleEvento",
    "a09870a7-3868-4361-a575-2f26f3437e8b": "DetalleEstablecimiento",
    "ed834bca-16a6-4609-b0c5-04cda45c9bad": "DetalleAdministrador",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "169c9837-35f0-4ad0-becc-467ae062533c": "InicioAdmin",
    "3ceb2f26-1147-4295-aeb4-9ace91f6060f": "ModificarOferta",
    "67533809-d58f-4ccf-a33b-0810db075811": "ResponderReview",
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
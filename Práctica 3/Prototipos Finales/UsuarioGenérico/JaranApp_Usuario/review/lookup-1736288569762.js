(function(window, undefined) {
  var dictionary = {
    "f1a7a4b9-48ff-4d3b-b98e-702315b8c937": "Detalles Establecimiento Seleccion Oferta",
    "b5023f3b-2eb2-4eb9-89ef-0a4c0016a15c": "Detalle Usuario",
    "70f3b21f-a559-4719-85dc-e9a6b3e24856": "Detalle Actividad",
    "7cc5525c-9a2d-4b6c-af8b-26e096a51649": "InicioUsuario",
    "3ddb6afa-d813-49c8-82f4-4069cb36b5db": "Actividades o Eventos - Actividades",
    "bf002b3c-839c-405b-914a-cb1dded11c3d": "Detalles Evento",
    "485b0526-09c4-4ae3-9e21-d0d84da2affb": "DetallesEstablecimientoReseñas",
    "192657d0-ac00-4f5c-9219-a4f76e6e437c": "Seguidores y Seguidos",
    "148ed442-ff3e-45f7-b542-7de5ae954e5f": "Crear Actividad",
    "bf21e357-98ee-4bff-b144-6f9f08bdbaa2": "Detalles Oferta",
    "9526bae3-49d3-4f0d-81b9-9591d7c09a86": "Registro",
    "fd813120-0cfc-438d-bbc5-d149c172cc75": "Detalle Evento Participa",
    "39fbd1e3-894a-4856-9c2e-44966d5f409c": "Detalles Establecimiento Seleccion Evento",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioApp",
    "03cee5ef-1262-46f7-83ae-6a1473a3e186": "Crear Reseña",
    "5db963bf-f21d-4f85-b4c9-41e8a61f7022": "Actividades o Eventos - Eventos",
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
(function(window, undefined) {
  var dictionary = {
    "4ffd4d39-045b-4131-a48d-1fe27d8bd287": "CrearActividad",
    "1189be83-d238-44ef-8484-e2741b9b1679": "Crear Reseña",
    "449ef3fa-cb12-499c-850b-9d235faaa5da": "DetalleActividad",
    "4fd198ed-59ae-4a63-9437-39f7e5c081b1": "InicioUsuario",
    "fbf73125-c0bb-4e96-b775-5131ea7dda66": "Detalle Evento Participa",
    "a7f04495-14b9-4cff-a1ac-d7e5eba837e6": "DetallesEstablecimiento 2",
    "57adc1c3-aa32-4e3d-9bf2-98b361db73cb": "Detalle Oferta",
    "1149f5ba-d63e-4481-b8be-3fd1f69a47a6": "Detalle Evento",
    "bc18d88a-ac01-4bb9-9d7f-31c43ca48fbc": "Seguidores y Seguidos",
    "32231785-f960-4fea-9baf-00b50be60690": "Registro",
    "1b6cf767-c424-42c6-abc7-a45fd636baa9": "Detalle Usuario",
    "d11a9252-a8fb-4d39-8501-7bf5e7010e39": "ActEvents-Actividades",
    "667faad0-092e-47b1-a674-178de97be8c5": "DetallesEstablecimiento",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "LogIn",
    "611cb570-4f7a-4d41-999c-3a379908ef12": "ActEvents-Eventos",
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
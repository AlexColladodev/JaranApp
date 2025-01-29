(function(window, undefined) {
  var dictionary = {
    "36e2d479-4d36-474a-968c-e3bf98ac6999": "DatosOfertaDibujo",
    "041814cc-b2b0-4136-87a6-76f5f5a66bbb": "CrearEstablecimiento",
    "deaa893f-f3ea-48d4-b4bd-7790ade916e3": "InicioAdminDibujo",
    "66f99806-557f-4f14-a23b-a66370ba0439": "CrearOfertaDibujo",
    "ea613ad4-80a4-4909-ac99-cf36dec60353": "InicioUsuarioDibujo",
    "40bf621f-1b67-4a53-9daf-b20717fbd6b7": "DetallesEstablecimientoAdminDibujo",
    "33590033-76be-476c-8ce2-a2c00f6b166f": "ModificarEstablecimientoDibujo",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "InicioAppDibujo",
    "131242ec-dc70-4b72-8421-d7c6c6d1a7fe": "DetallesUsuarioDibujo",
    "a42a0a3f-293e-4078-8695-f790450cbf87": "DetallesEstablecimiendoUsuario",
    "5a978ab7-d71d-4446-ab3f-6f748771c2fa": "Ventana Emergente",
    "704631f2-e4ec-4c23-96eb-83632354af72": "RegistroAdmin",
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
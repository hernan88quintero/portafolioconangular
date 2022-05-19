/**
 * Este archivo incluye los polyfills que necesita Angular y se carga antes de la aplicación.
 * Puedes añadir tus propios polyfills extra a este archivo.
 *
 * Este archivo está dividido en 2 secciones:
 * 1. Browser polyfills. Se aplican antes de cargar ZoneJS y están ordenados por navegadores.
 * 2. Importaciones de la aplicación. Archivos importados después de ZoneJS que deben ser cargados antes de su archivo principal.
 * archivo principal.
 *
 * La configuración actual es para los llamados navegadores "evergreen"; las últimas versiones de los navegadores que
 * se actualizan automáticamente. Esto incluye las versiones recientes de Safari, Chrome (incluyendo
 * Opera), Edge en el escritorio, y iOS y Chrome en el móvil.
 *
 * Learn more in https://angular.io/guide/browser-support
 */

/***************************************************************************************************
 * BROWSER POLYFILLS
 */

/**
 * Por defecto, zone.js parchea todas las macroTask y DomEvents posibles
 * El usuario puede desactivar partes del parche de macroTask/DomEvents estableciendo las siguientes banderas
 * porque esas banderas necesitan ser establecidas antes de que `zone.js` sea cargado, y webpack
 * pondrá la importación en la parte superior del bundle, por lo que el usuario necesita crear un archivo separado
 * en este directorio (por ejemplo: zone-flags.ts), y poner las siguientes banderas
 * en ese archivo, y luego añadir el siguiente código antes de importar zone.js.
 * importar './zone-flags';
 *
 * Las banderas permitidas en zone-flags.ts se enumeran aquí.
 *
 * Las siguientes banderas funcionarán para todos los navegadores.
 *
 * (window as any).__Zone_disable_requestAnimationFrame = true; // disable patch requestAnimationFrame
 * (window as any).__Zone_disable_on_property = true; // disable patch onProperty such as onclick
 * (window as any).__zone_symbol__UNPATCHED_EVENTS = ['scroll', 'mousemove']; // disable patch specified eventNames
 *
 *  in IE/Edge developer tools, the addEventListener will also be wrapped by zone.js
 *  with the following flag, it will bypass `zone.js` patch for IE/Edge
 *
 *  (window as any).__Zone_enable_cross_context_check = true;
 *
 */

/***************************************************************************************************
 * Zone JS se requiere por defecto para el propio Angular.
 */
import 'zone.js';  // Included with Angular CLI.


/***************************************************************************************************
 * APPLICATION IMPORTS
 */

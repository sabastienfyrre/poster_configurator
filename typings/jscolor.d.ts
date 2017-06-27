/**
* jscolor, JavaScript Color Picker
*
* @version 1.3.1
* @license GNU Lesser General Public License, http://www.gnu.org/copyleft/lesser.html
* @author  Jan Odvarko, http://odvarko.cz
* @created 2008-06-15
* @updated 2010-01-23
* @link    http://jscolor.com
*/
declare var jscolor: {
    dir: string;
    binding: boolean;
    preloading: boolean;
    install: () => void;
    init: () => void;
    getDir: () => any;
    detectDir: () => any;
    bind: () => void;
    preload: () => void;
    images: {
        pad: number[];
        sld: number[];
        cross: number[];
        arrow: number[];
    };
    imgRequire: {};
    imgLoaded: {};
    requireImage: (filename: any) => void;
    loadImage: (filename: any) => void;
    fetchElement: (mixed: any) => any;
    addEvent: (el: any, evnt: any, func: any) => void;
    fireEvent: (el: any, evnt: any) => void;
    getElementPos: (e: any) => number[];
    getElementSize: (e: any) => any[];
    getMousePos: (e: any) => any[];
    getViewPos: () => number[];
    getViewSize: () => number[];
    URI: (uri: any) => void;
    color: (target: any, prop: any) => void;
};
//import { Input } from './Input.js';
import { Obj3D } from './Obj3D.js';
//import { Canvas3D } from './Canvas3D.js';
//import { CvWireframe } from './CvWireFrame.js';
import { CvHLines } from './CvHLines.js';
import { Rota3D } from './Rota3D.js';
var canvas;
var graphics;
canvas = document.getElementById('circlechart');
graphics = canvas.getContext('2d');
var cv;
var obj;
var ang = 0;
var intTiempo;
var intTimer;
var timer;
function leerArchivo(e) {
    var archivo = e.target.files[0];
    if (!archivo) {
        return;
    }
    var lector = new FileReader();
    lector.onload = function (e) {
        var contenido = e.target.result;
        mostrarContenido(contenido);
        obj = new Obj3D();
        if (obj.read(contenido)) {
            //sDir = sDir1;
            cv = new CvHLines(graphics, canvas);
            cv.setObj(obj);
            cv.paint();
        }
    };
    lector.readAsText(archivo);
}
function mostrarContenido(contenido) {
    var elemento = document.getElementById('contenido-archivo');
    //
    //readObject(new Input(contenido));
    elemento.innerHTML = contenido;
}
function vp(dTheta, dPhi, fRho) {
    if (obj != undefined) {
        var obj_1 = cv.getObj();
        if (!obj_1.vp(cv, dTheta, dPhi, fRho))
            alert('datos no validos');
    }
    else
        alert('aun no has leido un archivo');
}
function eyeDownFunc() {
    vp(0, 0.1, 1);
}
function eyeUpFunc() {
    vp(0, -0.1, 1);
}
function eyeLeftFunc() {
    vp(-0.1, 0, 1);
}
function eyeRightFunc() {
    vp(0.1, 0, 1);
}
function incrDistFunc() {
    vp(0, 0, 2);
}
function decrDistFunc() {
    vp(0, 0, 0.5);
}
let angulo1 = 0;
function moverCabeza() {
    let af = 4;
    angulo1 += af;
 if(angulo1<20 && angulo1<40) {
   Rota3D.initRotate( obj.w[33], obj.w[44], af*Math.PI/90);	
   
 for (let i = 33; i <= 44; i++){
   obj.w[i] = Rota3D.rotate(obj.w[i]);
   }
} else alert ("limite de articulación cabe alcanzado ");
   cv.setObj(obj);
 cv.paint();
}
function moverCabezaD() {
    let af = -4;
    angulo1 -= af;
    if (angulo1 <= 20 && angulo1 <= 40) {
        Rota3D.initRotate(obj.w[49], obj.w[72], af * Math.PI / 180);
        for (let i = 49; i <= 72; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        angulo1--;
    }
    else
        alert("limite de la cabeza alcanzado");
}
let angulo = 0;
function movercola() {
    let af = 4;
    angulo -= af;
    if (angulo <= 20 && angulo <= 60) {
        Rota3D.initRotate(obj.w[41], obj.w[48], af * Math.PI / 90);
        for (let i = 41; i <= 48; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        
    }
    else
        alert("limite para mover la cola alcanzado");
}
function movercolaB() {
    let af = 8;
    angulo += af;
    if (angulo < 64 && angulo < 72) {
        Rota3D.initRotate(obj.w[41], obj.w[42], af * Math.PI / 180);
        for (let i = 41; i <= 48; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
    }
    else
        alert("la cola no puede moverse mas ");
    cv.setObj(obj);
    cv.paint();
}
let angulodr = 0;
function pza12DerFunc() {
    let af = -8;
    angulodr -= af;
    if (angulodr <= 32 && angulodr > -21) {
        Rota3D.initRotate(obj.w[23], obj.w[24], af * Math.PI / 180);
        for (let i = 17; i <= 24; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        angulodr--;
    }
    else
        alert("limite de pata delantera alcanzado");
}
let pdd = 0;
function pza12IzqFunc() {
    let af = 8;
    pdd += af;
    if (pdd < 32) {
        Rota3D.initRotate(obj.w[31], obj.w[32], af * Math.PI / 180);
        for (let i = 25; i <= 32; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
    }
    else
        alert("limite de articulacion de la pata alcanzado");
    cv.setObj(obj);
    cv.paint();
}
let pdD = 0;
function closP2() {
    let af = 8;
    pdD += af;
    if (pdd < 32 && pdd < -18) {
        Rota3D.initRotate(obj.w[23], obj.w[24], af * Math.PI / 180);
        for (let i = 17; i <= 24; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
    }
    else
        alert("limite alcanzado pata delantera");
    cv.setObj(obj);
    cv.paint();
}
let angulo2 = 0;
function closP() {
    let af = -8;
    angulo2 -= af;
    if (angulo2 <= 32 && angulo2 > -21) {
        Rota3D.initRotate(obj.w[31], obj.w[32], af * Math.PI / 180);
        for (let i = 25; i <= 32; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        angulo2--;
    }
    else
        alert("limite de pata delantera alcanzado");
}
let TD = 0;
function pTD() {
    let af = -8;
    TD -= af;
    if (angulo <= 32 && angulo > -15) {
        Rota3D.initRotate(obj.w[7], obj.w[8], af * Math.PI / 180);
        for (let i = 1; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        TD--;
    }
    else
        alert("limite de pata tracera Derecha alcanzado");
}
let pdDTI = 0;
function pTI() {
    let af = 8;
    pdDTI += af;
    if (pdDTI < 32 && pdDTI < 21) {
        Rota3D.initRotate(obj.w[15], obj.w[16], af * Math.PI / 180);
        for (let i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
    }
    else
        alert("limite de pata tracera Derecha alcanzado");
    cv.setObj(obj);
    cv.paint();
    pdDTI++;
}
let pPTD = 0;
function closPTD() {
    let af = 8;
    pPTD -= af;
    if (pPTD < 36 && pPTD > -18) {
        Rota3D.initRotate(obj.w[7], obj.w[8], af * Math.PI / 180);
        for (let i = 1; i <= 8; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        pPTD--;
    }
    else
        alert("limite de pata tracera Derecha alcanzado");
}
function closPTI() {
    let af = -8;
    angulo -= af;
    if (angulo <= 32 && angulo > -21) {
        Rota3D.initRotate(obj.w[15], obj.w[16], af * Math.PI / 180);
        for (let i = 9; i <= 16; i++) {
            obj.w[i] = Rota3D.rotate(obj.w[i]);
        }
        cv.setObj(obj);
        cv.paint();
        angulo--;
    }
    else
        alert("limite de pata tracera alcanzado");
}
document.getElementById('file-input').addEventListener('change', leerArchivo, false);
document.getElementById('eyeDown').addEventListener('click', eyeDownFunc, false);
document.getElementById('eyeUp').addEventListener('click', eyeUpFunc, false);
document.getElementById('eyeLeft').addEventListener('click', eyeLeftFunc, false);
document.getElementById('eyeRight').addEventListener('click', eyeRightFunc, false);
document.getElementById('incrDist').addEventListener('click', incrDistFunc, false);
document.getElementById('decrDist').addEventListener('click', decrDistFunc, false);
//movimiento de piezas
document.getElementById('movercola').addEventListener('click', movercola, false);
document.getElementById('movercolaB').addEventListener('click', movercolaB, false);
document.getElementById('moverCabeza').addEventListener('click', moverCabeza, false);
document.getElementById('moverCabezaD').addEventListener('click', moverCabezaD, false);
document.getElementById('pza12Izq').addEventListener('click', pza12IzqFunc, false);
document.getElementById('pza12Der').addEventListener('click', pza12DerFunc, false);
document.getElementById('closP2').addEventListener('click', closP2, false);
document.getElementById('closP').addEventListener('click', closP, false);
document.getElementById('pTD').addEventListener('click', pTD, false);
document.getElementById('pTI').addEventListener('click', pTI, false);
document.getElementById('closPTD').addEventListener('click', closPTD, false);
document.getElementById('closPTI').addEventListener('click', closPTI, false);

var Pix, Piy;
var Pfx, Pfy;
var theta = 0.3, phi = 1.3, SensibilidadX = 0.02, SensibilidadY = 0.02;
var flag = false;
function handleMouse(evento) {
    Pix = evento.offsetX;
    Piy = evento.offsetY;
    flag = true;
}
function makeVizualization(evento) {
    if (flag) {
        Pfx = evento.offsetX;
        Pfy = evento.offsetY;
        //console.log(Pfx, Pfy)
        var difX = Pix - Pfx;
        var difY = Pfy - Piy;
        vp(0, 0.1 * difY / 50, 1);
        Piy = Pfy;
        vp(0.1 * difX, 0 / 50, 1);
        Pix = Pfx;
        /*if( Piy>Pfy+1 ){
          phi += SensibilidadY;
          vp(0, 0.1*, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }
        
        if(Pfy>Piy+1){
          phi -= SensibilidadY;
          vp(0,-0.1, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Piy=Pfy;
        }*/
        /*if (Pix > Pfx + 1) {
          theta += SensibilidadX;
          vp(0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }
            
        if (Pfx > Pix + 1) {
          theta -= SensibilidadX;
          vp(-0.1, 0, 1);
          //cv.redibuja(theta, phi, tamanoObjeto);
          Pix = Pfx;
        }*/
    }
}
function noDraw() {
    flag = false;
}
canvas.addEventListener('mousedown', handleMouse);
canvas.addEventListener('mouseup', noDraw);
canvas.addEventListener('mousemove', makeVizualization);

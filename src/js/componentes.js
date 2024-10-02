import '../css/componentes.css';
//import logo from '../assets/img/webpackL.png';

export const saludar = (nombre) =>{
    console.log('creando etiqueta H1');

    const h1= document.createElement('h1');
    h1.innerText = `Hola ${nombre}`;

    document.body.append(h1);

    //imagen
    //const img = document.createElement('img');
    //img.src = logo
    //document.body.append(img);
}
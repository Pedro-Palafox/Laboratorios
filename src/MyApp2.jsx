import { prueba } from "./data/prueba";
export function Myapp2(){
    const estudiante = {
        matricula: 'A01027841',
        nombre: 'Pedro',
        apellido: 'Gomez',
        edad: '20',
        dirección: {
        ciudad: 'Mty',
        zip: '64800'
        }
        };
        console.table(estudiante);
        console.log(prueba);

}
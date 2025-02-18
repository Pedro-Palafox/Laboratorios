import { heroes } from "./data/hero";

export function MyApp(){
    const nombre = 'Hello World';
    const arreglo = [1,2,3,4,5];
    console.log(arreglo)
    let arreglo2 = [...arreglo,7];
    console.log(arreglo2);
    const doubles = arreglo2.map(function(i) {
        return i *2;
    })
    console.log(doubles)

    console.log(heroes)

    const getHeroeById = (id) => heroes.find ( (heroe)=> heroe.id===id);
    console.log(getHeroeById(4));

    const getHeroeByEmpresa = (empresa) => heroes.filter( (heroe) => heroe.owner===empresa);
    console.log(getHeroeByEmpresa('DC'));
    
}
const saludo = function(nombre){
    return nombre;
}
const saludo2 = (nombre)=> {
    return nombre;
}
const saludo3 = (nombre)=> nombre;

function getSaludo(nombre){
    return 'Hola '+ nombre;
    }
    console.log('Este es un texto:${ getSaludo()');

/**
 *  const estudiante = {
        matricula: 'A000001',
        nombre: 'Juan',
        edad: '20',
        dirección: {
        ciudad: 'Mty',
        zip: '64800'
        }
        };
        console.table(estudiante);
        const estudiante2 = {...estudiante};
        estudiante2.nombre ='Luis';
        console.table(estudiante2);
 */
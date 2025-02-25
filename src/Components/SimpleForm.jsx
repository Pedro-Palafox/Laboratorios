import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
    const [formState, setFormState] = useState({
        Matricula: 'A01027841',
        Nombre: 'Pedro',
        Apellidos: "Gomez Palafox",
        Edad:"20",
        Universidad:"Tec",
        Carrera:"ITC"
    });
    const { Matricula, Nombre,Apellidos,Edad,Universidad,Carrera} = formState;

    const onInputChange = ({ target }) => {
        const { name, value } = target; 
        setFormState({...formState, [ name ]: value
        });
    }

    useEffect( () => {
        // console.log('useEffect called!');
    }, []);

    useEffect( () => {
        //console.log('formState changed!');
    }, [formState]);

    useEffect( () => {
        // console.log('email changed!');
    }, [  ]);

    return (
        <>
            <h1>Formulario Simple</h1><hr />

            <input type="text" className="form-control" placeholder="Matricula" name="Matricula"
                value={ Matricula }
                onChange={ onInputChange }
            />
            <input type="text" className="form-control mt-2" placeholder="Pedro" name="Nombre"
                value={ Nombre }
                onChange={ onInputChange }
            />
            <input type="text" className="form-control mt-3" placeholder="Gomez" name="Apellido"
                value={ Apellidos }
                onChange={ onInputChange }
            />
            <input type="text" className="form-control mt-4" placeholder="19" name="Edad"
                value={ Edad }
                onChange={ onInputChange }
            />
            <input type="text" className="form-control mt-5" placeholder="Tec" name="Universidad"
                value={ Universidad }
                onChange={ onInputChange }
            />
            <input type="text" className="form-control mt-6" placeholder="Siglas" name="carrera"
                value={ Carrera }
                onChange={ onInputChange }
            />
            <button className='btn btn-primary' onClick={()=>{console.log( Matricula, Nombre,Apellidos,Edad,Universidad,Carrera)}}> Enviar  </button>
        </>
    )
}
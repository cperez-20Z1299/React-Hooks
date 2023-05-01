import { useEffect, useState } from "react"

export const SimpleForm = () => {

    const [fromState, setFromState] = useState({
        username: 'pepito',
        email: 'pepito@gmail.com'
    })

    const { username, email} = fromState

    const onInputChange = ( {target}) => {

        const { name, value } = target;
        setFromState({
            ...fromState,
            [name]: value
        });

        const {email} = target;
        setFromState({
          ...fromState,
          [email]: value
        })
        
        //console.log(value);

    }
    //useEffect ejecuta efectos secundarios al cumplir una condicion
     useEffect(() => {

       console.log('Efecto activo');
    
     }, [])

     useEffect(() => {

        console.log('Se detecto un cambio en el username');
     
      }, [username])

      useEffect(() => {

        console.log('Se detecto un cambio en el email');
     
      }, [email])

  return (

    <>
        <div className="container">
            
            <h1>SimpleForm</h1>
            <hr />
            <input type="text" className="form-control" 
                    placeholder="Ingresa tu nombre" 
                    name="username"
                    value={username}
                    onChange={ onInputChange }
            />
            <input type="text" className="form-control" 
                    placeholder="Ingresa tu correo" 
                    name="email"
                    value={email}
                    onChange={onInputChange}
                    />
                    

        </div>
    </>
  )
}

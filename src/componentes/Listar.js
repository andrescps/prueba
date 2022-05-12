import React from 'react';
class Listar extends React.Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
  
    render() { 
        return ( 
            <table class="table">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Cedula</th>
                        <th>Nacimiento</th>
                        <th>Telefono</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Luis</td>
                        <td>41451545</td>
                        <td>12/02/2014</td>
                        <td>044545</td>
                    </tr>
                    
                </tbody>
            </table>
         );
    }
}
 
export default Listar;
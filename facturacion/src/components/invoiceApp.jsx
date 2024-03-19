
import { getInvoice } from "../services/getInvoice"

export const InvoiceApp = () => {

    const {id,name,client,company,items} = getInvoice();

    const{name:nameCliente, lastName,address}=client;
    const {country,city,street,number} = address;
    return(
        <>
         <h1>Ejemplo Factura</h1>        
         <ul>
            <li>Id: {id}</li>
            <li>Name: {name}</li>

         </ul>

         <h3>Datos del Cliente</h3>
         <ul>
            <li>{nameCliente} {lastName}</li>
            <li>{country}</li>
            <li>{city}</li>
            <li>{street} {number}</li>

         </ul>


         <h3>Datos de la Empresa</h3>
         <ul>
            <li>{company.name}</li>
            <li>{company.fiscalNumber}</li>
         </ul>

         <h4>Productos de la Factura</h4>
         <table>
            <thead>
               <tr>
               <th>Producto</th>
               <th>Precio</th>
               <th>Cantidad</th>
               </tr>
            </thead>
            <tbody>
               {items.map(({id,product,price,quantity}) => ( <tr key={id}>

                        <td> {product} </td>
                        <td> {price} </td>
                        <td> {quantity} </td>

                     </tr>

                  ))}
               
            </tbody>
         </table>
        </>     
        
    )
}
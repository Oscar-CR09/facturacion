
import { getInvoice } from "../services/getInvoice"
import { clientView } from "./ClientView";
import { CompanyView } from "./CompanyView";
import { InvoiceView } from "./invoiceView";

export const InvoiceApp = () => {

   const { id, name, client, company, items } = getInvoice();

   return (
      <>


         <div className="container">

            <div className="card my-3">

               <div className="card-header">
                  Ejemplo Factura
               </div>

               <div className="card-body">
                  <InvoiceView id={id} name={name}></InvoiceView>

                  <div className="row my-3">
                     <div className="col">
                        <clientView client={client} > <clientView />

                     </div>

                     <div className="col">
                        <CompanyView company={company} ></CompanyView>
                     </div>
                  </div>

                  <h4>Productos de la Factura</h4>

                  <table className="table table-striped table-hover">
                     <thead>
                        <tr>
                           <th>Producto</th>
                           <th>Precio</th>
                           <th>Cantidad</th>
                        </tr>
                     </thead>
                     <tbody>
                        {items.map(({ id, product, price, quantity }) => (<tr key={id}>

                           <td> {product} </td>
                           <td> {price} </td>
                           <td> {quantity} </td>

                        </tr>

                        ))}

                     </tbody>
                  </table>
               </div>
            </div>
         </div>

      </>

   )
}
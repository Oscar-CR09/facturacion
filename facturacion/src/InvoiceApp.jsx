import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const { total , id, name, client, company, items } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [QualityValue, setQualiyValue] = useState(0);
    

    return (
        <>
            <div className="container">

                <div className="card my-3">

                    <div className="card-header">
                        Ejemplo Factura
                    </div>
                    <div className="card-body">
                        <InvoiceView id={ id } name={ name } />

                        <div className="row my-3">

                            <div className="col">
                                <ClientView title="Datos del cliente" client={client} />
                            </div>

                            <div className="col">
                                <CompanyView title="Datos de la empresa" company={company} />
                            </div>

                        </div>

                        <ListItemsView title="Productos de la factura" items={items} />
                        <TotalView total = { total } />
                        <form >

                            <input type="text" name="product" placeholder="Producto" className="form-control m-3" 
                            onChange={event => {
                                console.log(event.target.value)
                            }}/>
                            <input type="text" name="price" placeholder="Precio" className="form-control m-3" 
                            onChange={event => {
                                console.log(event.target.value)
                            }}/>
                            <input type="text" name="quantity" placeholder="Cantidad" className="form-control m-3" 
                            onChange={event => {
                                console.log(event.target.value)
                            }}/>

                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
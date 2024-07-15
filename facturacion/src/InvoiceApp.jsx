import { useState } from "react";
import { getInvoice } from "./services/getInvoice"
import { ClientView } from "./components/ClientView";
import { CompanyView } from "./components/CompanyView";
import { InvoiceView } from "./components/InvoiceView";
import { ListItemsView } from "./components/ListItemsView";
import { TotalView } from "./components/TotalView";


export const InvoiceApp = () => {

    const { total , id, name, client, company, items:itemsInicial } = getInvoice();
    const [productValue, setProductValue] = useState('');
    const [priceValue, setPriceValue] = useState(0);
    const [QualityValue, setQualiyValue] = useState(0);
    
    const [items,setItems] = useState(itemsInicial);

    const [counter, setCounter] = useState(4);

    const onPruductChange = ({ target }) => {
        console.log(target.value);
        setProductValue(target.value);
    }

    const onPriceChange = ({ target }) => {
        console.log(target.value);
        setPriceValue(target.value);

    }
    const onQuantityChange = ({ target }) => {
        console.log(target.value);
        setQualiyValue(target.value);

    }

    const onInvoiceItemsSubmit = (event)=>{
        event.preventDefault();

        if(productValue.trim().length <=1)return;
        if(priceValue.trim().length <=1)return;
        if(isNaN(priceValue.trim())){
            alert("error el precio no es un numero")
            return;}
        if(QualityValue.trim().length <1){
            alert("error la cantidad tien que ser numero  mayor a cero")
            return;
        }
        if(isNaN(QualityValue.trim())){
            alert("error el cantidad no es un numero")
            return;}

            setItems([...items,{
                    id:counter, 
                    product: productValue.trim(),
                     price: +priceValue.trim(),
                     quantity: parseInt(QualityValue.trim(),10) 
 
        }]);

        
        setProductValue('');
        setPriceValue('');
        setQualiyValue('');
        setCounter(counter +1);

    }

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
                        <form className="w-50" onSubmit={ onInvoiceItemsSubmit }>

                            <input 
                                type="text" 
                                name="product" 
                                value={productValue}
                                placeholder="Producto" 
                                className="form-control m-3" 
                                onChange={onPruductChange}/>

                            <input 
                                type="text" 
                                name="price" 
                                value={priceValue}
                                placeholder="Precio" 
                                className="form-control m-3" 
                                onChange={event =>onPriceChange(event) }/>

                            <input
                                type="text" 
                                name="quantity" 
                                value={QualityValue}
                                placeholder="Cantidad" 
                                className="form-control m-3" 
                                onChange={onQuantityChange}/>

                            <button type="submit"
                             className="btn btn-primary m-3">
                                 Nuevo Items
                                 </button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </>
    )
}
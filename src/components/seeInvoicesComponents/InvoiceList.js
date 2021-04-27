const InvoiceList = ({invoiceList}) => {


    return (
        <table className="table table-striped table-bordered">
            <thead>
            <tr>
                <th>Date</th>
                <th>Serial Number</th>
                <th>Buyer</th>
                <th>Seller</th>
                <th>Price</th>
            </tr>
            </thead>

            <tbody>
            {
                invoiceList.map(
                    (invoice) =>(
                        <tr key={invoice.id}>
                            <td>{invoice.invoiceDate}</td>
                            <td>{invoice.id}</td>
                            <td>{invoice.customerName}</td>

                            {/*TODO: add seller and price */}
                            <td>A. Finman</td>
                            <td>999 SEK</td>
                            <td><button className="btn btn-info">Preview</button></td>
                        </tr>
                    )
                )
            }
            </tbody>
        </table>
    )
}

export default InvoiceList
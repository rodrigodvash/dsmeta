import NotificationButton from '../NotificationButton'
import './styles.css'

function SalesCard() {
    return (
        <div className="dsmeta-card">
            <h2 className="dsmeta-sales-title">Vendas</h2>
            <div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
                <div className="dsmeta-form-control-container">
                    <input className="dsmeta-form-control" type="text"/>
                </div>
            </div>

            <div>
                <table className="dsmeta-sales-table">
                    <thead>
                        <th className="dsmeta-sales-table-show992">ID</th>
                        <th className="dsmeta-sales-table-show576">Data</th>
                        <th>Vendedor</th>
                        <th className="dsmeta-sales-table-show992">Visitas</th>
                        <th className="dsmeta-sales-table-show992">Vendas</th>
                        <th>Total</th>
                        <th>Notificar</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="dsmeta-sales-table-show992">#02468</td>
                            <td className="dsmeta-sales-table-show576">03/05/1992</td>
                            <td>Vash</td>
                            <td className="dsmeta-sales-table-show992">15</td>
                            <td className="dsmeta-sales-table-show992">11</td>
                            <td>€ 5432,00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                   <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-sales-table-show992">#13579</td>
                            <td className="dsmeta-sales-table-show576">03/05/1992</td>
                            <td>Knives</td>
                            <td className="dsmeta-sales-table-show992">13</td>
                            <td className="dsmeta-sales-table-show992">24</td>
                            <td>€ 4321,00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td className="dsmeta-sales-table-show992">#12357</td>
                            <td className="dsmeta-sales-table-show576">03/05/1992</td>
                            <td>Yidhra</td>
                            <td className="dsmeta-sales-table-show992">19</td>
                            <td className="dsmeta-sales-table-show992">33</td>
                            <td>€ 1234,00</td>
                            <td>
                                <div className="dsmeta-red-button-container">
                                    <NotificationButton/>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}

export default SalesCard
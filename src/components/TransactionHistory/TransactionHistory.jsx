import css from "./TransactionHistory.module.css";


export default function TransactionHistory({ transactions }) {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.tableHead}>
                <tr>
                    <th>Type</th>
                    <th>Amount</th>
                    <th>Currency</th>
                </tr>
            </thead>
            
            <tbody className={css.tableBody}>
                {transactions.map( transaction => (
                    <tr key={transaction.id}>
                        <td>{transaction.type}</td>
                        <td>{transaction.amount}</td>
                        <td>{transaction.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}
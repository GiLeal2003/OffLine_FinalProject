//import { Card } from '@/app/gestao/dashboard/card';
//import RevenueChart from '@/app/gestao/dashboard/revenue-chart';
//import LatestInvoices from '@/app/gestao/dashboard/latest-invoices';
//import {chamada2} from "@/app/script";
 
//export default async function Page() {
    //const pedidos = await chamada2(2);
  //return (
    //<main>
      //<h1 className={`mb-4 text-xl md:text-2xl`}>
        //Dashboard
      //</h1>
      //<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        //{/* <Card title="Collected" value={totalPaidInvoices} type="collected" /> */}
        //{/* <Card title="Pending" value={totalPendingInvoices} type="pending" /> */}
        //{/* <Card title="Total Invoices" value={numberOfInvoices} type="invoices" /> */}
        //{/* <Card
          //title="Total Customers"
          //value={numberOfCustomers}
          //type="customers"
       // /> */}
      //</div>
      //<div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
        //{ <RevenueChart chamada2={chamada2}  />}
        //{/* <LatestInvoices latestInvoices={latestInvoices} /> */}
      //</div>
    //</main>
  //);
//}
import '@fortawesome/fontawesome-free/css/all.min.css';
import styles from './vendas.module.css';
export default function Page() {
  return <h1 className={styles.h1}>Relatório de Vendas</h1>;
}

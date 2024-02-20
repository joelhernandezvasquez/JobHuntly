
import DashboardJobStatsticticsBody from './DashboardJobStatsticticsBody';
import style from './style.module.css';

const DashboardJobStatstictics = () => {

/*
 Option 1
 - Make a get request on the parent server component and bring all the data to the child components.
 - The child components will recieve the data via props and administer and filter the data
- The data will be filter on tab click interaction on the client components.
 */

/* Option 2
  revalidate path
*/

/* Steps 
 1 - [x] will move from style.header to a client component
 2 - [x] make the state work on the client component
 3 - [x] design the rest of the UI such as the dots
 4 - [x] design the chart component
 5 - Prepare the parent component to send the fetch data to client components
 6- [] Create the service client fetch function data
 7 - Create a fake endpoint to simulate this data sent
 8 - client components to recieve the data and manipulate it
 9 - make the toggle tab event to work and make the changes everywhere
 10 compose the client components
 11 - make the client toggle event to work and make the changes dinamic everywhere
 12- make sure with change the fetching status filter on server component.
*/

  return (
    <section className={style.wrapper}>
        <DashboardJobStatsticticsBody/>
    </section>
  )
}

export default DashboardJobStatstictics
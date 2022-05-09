import ServicesPage from '../Components/ServicesPage';
import Layout from '../Layout/Layout'
import {HeadServices} from "../Head/HeadTitle"
function Services() {
    return (
        <>
        <HeadServices />
       <Layout>
           <ServicesPage />
       </Layout>
        </>
    );
}

export default Services;
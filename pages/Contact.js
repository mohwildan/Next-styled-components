import ContactContents from "../Components/ContactContents";
import Layout from "../Layout/Layout"
import { HeadContact } from "../Head/HeadTitle";
function Contact() {
    return (
        <>
        <HeadContact />
        <Layout>
            <ContactContents />
        </Layout>
        </>
    );
}

export default Contact;
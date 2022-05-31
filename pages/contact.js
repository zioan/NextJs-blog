import ContactForm from '../components/contact/contact-form';
import Head from 'next/head';

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact me</title>
        <meta name='description' content='Feel free to contact me.' />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;

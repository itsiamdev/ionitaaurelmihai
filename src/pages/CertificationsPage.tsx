import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import { Helmet } from "react-helmet";

const CertificationsPage = () => {
  return (
    <>
      <Helmet>
        <title>Certificări - Ionita Aurel Mihai</title>
        <meta name="description" content="Certificări profesionale obținute de Ionita Aurel Mihai. HTML, CSS, JavaScript, TypeScript, Git și Responsive Web Design." />
        <link rel="canonical" href="https://ionita-aurel-mihai.lovable.app/certificari" />
      </Helmet>

      <div className="min-h-screen">
        <Navigation />
        <Certifications />
        <Footer />
      </div>
    </>
  );
};

export default CertificationsPage;
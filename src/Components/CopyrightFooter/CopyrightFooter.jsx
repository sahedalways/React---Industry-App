import Container from "react-bootstrap/Container";
import "./CopyrightFooter.scss";

const CopyrightFooter = () => {
  return (
    <>
      <section className="copyrightFooter_section">
        <Container>
          <div className="copyright_footer_text_area">
            <div className="copyright_footer_copright_text">
              <h6>Powered by Instalogic Inc.</h6>
              <h6>2020 &copy; Orion Safety Equipment Ltd.</h6>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default CopyrightFooter;

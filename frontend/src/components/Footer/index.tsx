const Footer = () => {
  return (
    <div>
      <footer className="footer mt-auto py-3 bg-dark">
        <div className="container">
          <p className="text-light">
            App desenvolvido por{" "}
            <a
              href="https://github.com/marciomrcr"
              target="_blank"
              rel="noreferrer"
            >
              Márcio Rodrigues
            </a>
          </p>
          <p className="text-light">
            <strong>Dashboard de Vendas</strong>
            <br />
            Siga-me:{" "}
            <a
              href="https://www.instagram.com/rodrigues.mrcr/"
              target="_blank"
              rel="noreferrer"
            >
              @rodrigues.mrcr
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;

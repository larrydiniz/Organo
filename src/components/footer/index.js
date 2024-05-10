import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <a href="facebook.com" target="_blank">
          <img src="/images/fb.png" alt="facebook logo" />
        </a>
        <a href="twitter.com" target="_blank">
          <img src="/images/tw.png" alt="twitter logo" />
        </a>
        <a href="instagram.com" target="_blank">
          <img src="/images/ig.png" alt="instagram logo" />
        </a>
      </div>
      <div>
        <img src="/images/logo.png" alt="" />{" "}
      </div>
      <div>
        <p>Desenvolvido por Larissa Diniz</p>
      </div>
    </footer>
  );
};

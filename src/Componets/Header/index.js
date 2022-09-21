import './header.css'

const Header = () => {
  return (
    <div className="header_container">
      <section className="img_container">
      <img id="tpm" src="tpm.svg" alt="logo do tmp"></img>
      <h4>
        McCain Foods
      </h4>
      </section>
      <h2 className="subtitulo">Team Management Profile</h2>
      <a href="" alt="" target="blank" title="Button">
        <img  className="menu_button" src="menu_button.svg" alt="button do menu"></img>
      </a>
    </div>
  )
}
export default Header

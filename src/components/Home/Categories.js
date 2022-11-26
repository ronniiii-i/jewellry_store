import necklace from '../../assets/img/neckhero.jpg'
import earring from '../../assets/img/earhero.jpg'
import ring from '../../assets/img/ringhero.jpg'
import bracelet from '../../assets/img/brace2.jpg'

function Categories() {
  return (
    <section id="categories">
        <h2>Browse by Categories</h2>
        <div className="slider flex nowrap">
            <div className="card">
                <a className="wrapper" href="/necklaces">
                    <img src={necklace} alt="Necklaces" />
                </a>
                <a href="/necklaces">Necklaces</a>
            </div>
            <div className="card">
                <a className="wrapper" href="/earrings">
                    <img src={earring} alt="Earrings" />
                </a>
                <a href="/earrings">Earrings</a>
            </div>
            <div className="card">
                <a className="wrapper" href="/bracelets">
                    <img src={bracelet} alt="Bracelets" />
                </a>
                <a href="/bracelets">Bracelets</a>
            </div>
            <div className="card">
                <a className="wrapper" href="/rings">
                    <img src={ring} alt="Rings" />
                </a>
                <a href="/rings">Rings</a>
            </div>
        </div>
    </section>
  )
}

export default Categories
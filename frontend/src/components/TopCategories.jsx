import burger from "../resources/y-burger.png"
import fish from "../resources/y-fish.png"
import salad from '../resources/y-salad.png'
import spagetti from '../resources/y-pasta.png'
import sandwich from '../resources/y-sandwich.png'
import yPizza from '../resources/y-pizza.png'

const TopCategories = ({title, imageURL, date}) => {
    return (
        <div className="card__wrapper column is-2">
        <div className="card has-text-centered">
            <div className="card-image">
                <div className="columns">
                    <div className="column is-3"></div>
                <div className="column is-6">
                <figure className="image is-3by2">
                    <img src={imageURL} alt={title}/>
                </figure>
                </div>
                </div>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="is-size-6 is-5">{title}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

const Posts = () => (
    <div>
    <section class="section white-section">
    <h2 class="title">Top Categories</h2>
        <div className="columns is-multiline is-centered">
            <TopCategories title="Sammy" imageURL={sandwich}/>
            <TopCategories title="Burger" imageURL={burger} />
            <TopCategories title="Seafood" imageURL={fish} />
            <TopCategories title="Pasta" imageURL={spagetti} />
            <TopCategories title="Pizza" imageURL={yPizza} />
            <TopCategories title="Salad" imageURL={salad} />
        </div>
        </section>
        </div>
);

export default Posts;
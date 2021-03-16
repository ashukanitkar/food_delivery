import sandwich from '../resources/sandwich.png';
import burger from '../resources/burger.png';
import fish from '../resources/fish.png';
import spagetti from '../resources/spaguetti.png';
import pizza from '../resources/pizza.png';
import salad from '../resources/salad.png';

const TopCategories = ({title, imageURL, date}) => {
    return (
        <div className="card__wrapper column is-1">
        <div className="card lemon-outline">
            <div className="card-image">
                <div className="columns is-centered">
                <div className="column is-8">
                    <figure className="image is-2by2">
                        <img src={imageURL} alt={title}/>
                    </figure>
                </div>
                </div>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <div class="columns is-centered">
                        <div class="column">
                            <p className="is-size-6">{title}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}

const Posts = () => (
    <div>
    <section class="section white-section">
    <h2 class="title">Top Categories</h2><br/>
        <div className="columns is-multiline is-centered">
            <TopCategories title="Sammy" imageURL={sandwich}/>
            <TopCategories title="Burger" imageURL={burger} />
            <TopCategories title="Seafood" imageURL={fish} />
            <TopCategories title="Pasta" imageURL={spagetti} />
            <TopCategories title="Pizza" imageURL={pizza} />
            <TopCategories title="Salad" imageURL={salad} />
            <TopCategories title="Seafood" imageURL={fish} />
            <TopCategories title="Pasta" imageURL={spagetti} />
            <TopCategories title="Seafood" imageURL={fish} />
            <TopCategories title="Pasta" imageURL={spagetti} />
            <TopCategories title="Pasta" imageURL={spagetti} />
        </div>
        </section>
        </div>
);

export default Posts;
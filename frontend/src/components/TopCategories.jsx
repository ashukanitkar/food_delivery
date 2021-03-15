import pasta from "../resources/pasta.jpg"
import bagel from "../resources/bagel.png"

const TopCategories = ({title, imageURL, date}) => {
    return (
        <div className="card__wrapper column is-2">
        <div className="card">
            <div className="card-image">
                <figure className="image is-4by3">
                    <img src={imageURL} alt={title}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="media-content">
                    <p className="title is-4">{title}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

const Posts = () => (
    <div>
    <section class="section">
    <h2 class="title">Top Cuisines</h2>
    </section>
        <div className="columns is-multiline">
            <TopCategories title="Bagel" imageURL={pasta}/>
            <TopCategories title="Burger" imageURL={pasta} />
            <TopCategories title="Chicken" imageURL={pasta} />
            <TopCategories title="Pasta" imageURL={pasta} />
            <TopCategories title="Pizza" imageURL={pasta} />
            <TopCategories title="Salad" imageURL={pasta} />
        </div>
        </div>
);

export default Posts;
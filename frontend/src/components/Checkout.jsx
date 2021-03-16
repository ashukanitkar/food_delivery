import Contact from './Contact';
import Address from './Address';
import CartSummary from './CartSummary';

const Checkout = () => {
    return (

        <div class="columns full-length">
        <div class="column is-three-quarters">
            <Contact></Contact>
            <Address></Address>
        </div>
        <div class="column is-white">
            <CartSummary></CartSummary>
        </div>
        </div>

    )
}

export default Checkout;
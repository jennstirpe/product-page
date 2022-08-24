import { StyledCheckout } from "./styled/Checkout.styled";
import CartItem from "./CartItem";
import productImg from "../images/image-product-1.jpg";

export default function Checkout({ closeCheckout }) {


    function handleContinueShopping(e) {
        e.preventDefault()
        closeCheckout()
    }

  return (
    <StyledCheckout>

            <form id="checkout-form">

                <div className="customer-contact">
                    <h3>Contact Information</h3>
                    <input type="email" placeholder="Email" required />
                    <label className="mail-list">
                        <input type="checkbox" />
                        Email me with news and offers
                    </label>
                </div>
                
                <div className="customer-contact">
                    <h3>Shipping Address</h3>
                    <input type="text" placeholder="First name" required />
                    <input type="text" placeholder="Last name" required />
                    <input type="text" placeholder="Address" required />
                    <input type="text" placeholder="Apartment, suite, etc. (optional)" />
                    <input type="text" placeholder="City" required />
                    <select id="state">
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                    <input type="number" placeholder="ZIP code"required />
                    <input type="number" placeholder="Phone" required />
                </div>
                
                <button id="ship-btn" type="submit">Continue to shipping</button>
            </form>

        <button onClick={handleContinueShopping} id="shop-btn">Continue Shopping</button>
    </StyledCheckout>
  )
}

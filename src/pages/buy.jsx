
import React, { useState } from 'react'
import Head from "../component/he"
import axios from 'axios'
import { useParams } from 'react-router-dom'



const buy = () => {

    let { id } = useParams();

    const [payment, setPayment] = useState({
        name: '',
        Address: '',
        city: '',
        country: '',
        paymentMethod: '',
        number:''

    })

    const input = (e) => {
        e.persist();
        setPayment({ ...payment, [e.target.name]: e.target.value })
    }

    const save = (e) => {
        e.preventDefault()
        const data = {
            name: payment.name,
            Address: payment.Address,
            city: payment.city,
            country: payment.country,
            paymentMethod: payment.paymentMethod,
            number: payment.number
        }
        console.log(data);
        axios.post(`http://localhost/ReactProject/api/api-insert-booking.php`, data).then(res => {
            alert("success")
            console.log(res);

        });
    }

    return (
        <><Head /><div class="container mt-5">
            <h2 class="mb-3">Checkout</h2>
            <form onSubmit={save}>
                <h4 class="mb-3">Billing address</h4>
                <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="firstName">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" required name='name' onChange={input} value={payment.name} />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="lastName">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required />
                    </div>
                </div>

                <div class="mb-3">
                    <label for="address">Address</label>
                    <input type="text" class="form-control" id="address" placeholder="1234 Main St" required name='Address' onChange={input} value={payment.Address} />
                </div>

                <div class="mb-3">
                    <label for="city">City</label>
                    <input type="text" class="form-control" id="city" required name='city' onChange={input} value={payment.city} />
                </div>
                <div class="mb-3">
                    <label for="city">Number</label>
                    <input type="text" class="form-control" id="city" required name='number' onChange={input} value={payment.number} />
                </div>

                <div class="row">
                    <div class="col-md-5 mb-3">
                        <label for="country">Country</label>
                        <select class="form-select" id="country" required name='country' onChange={input} value={payment.country} >
                            <option value="">Choose...</option>
                            <option>United States</option>
                        </select>
                    </div>
                    <div class="col-md-4 mb-3">
                        <label for="state">State</label>
                        <select class="form-select" id="state" required>
                            <option value="">Choose...</option>
                            <option>California</option>
                        </select>
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="zip">Zip</label>
                        <input type="text" class="form-control" id="zip" required />
                    </div>
                </div>

                <hr class="mb-4" />

                <h4 class="mb-3">Payment</h4>

                <div className="my-3">
                    <div className="form-check">
                        <input
                            id="credit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required
                            onChange={input}
                            value="Credit card"
                        />
                        <label className="form-check-label" htmlFor="credit">Credit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            id="debit"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required
                            onChange={input}
                            value="Debit card"
                        />
                        <label className="form-check-label" htmlFor="debit">Debit card</label>
                    </div>
                    <div className="form-check">
                        <input
                            id="paypal"
                            name="paymentMethod"
                            type="radio"
                            className="form-check-input"
                            required
                            onChange={input}
                            value="Bkash"
                        />
                        <label className="form-check-label" htmlFor="paypal">Bkash</label>
                    </div>
                </div>


                {/* <div class="row">
                    <div class="col-md-6 mb-3">
                        <label for="cc-name">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" required />
                    </div>
                    <div class="col-md-6 mb-3">
                        <label for="cc-number">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" required />
                    </div>
                </div> */}
                {/* <div class="row">
                    <div class="col-md-3 mb-3">
                        <label for="cc-expiration">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" required />
                    </div>
                    <div class="col-md-3 mb-3">
                        <label for="cc-cvv">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" required />
                    </div>
                </div> */}

                <hr class="mb-4" />

                <button class="btn btn-primary btn-lg btn-block mb-3" type="submit">Continue to checkout</button>
            </form>
        </div></>
    )
}

export default buy
import { useState, useEffect } from 'react'
import { CheckoutHeader } from './CheckoutHeader'
import axios from 'axios'
import './checkoutpage.css'
import './checkout-header.css'
import { OrderSummary } from './OrderSummary'
import { PaymentSummary } from './PaymentSummary'

export function CheckoutPage({ cart }) {

    const [deliveryOptions, setDeliveryOptions] = useState([])
    const [paymentSummary, setPaymentSummary] = useState(null)


    useEffect(() => {
        axios.get('api/payment-summary').then((res) => {
            console.log(res.data)
            setPaymentSummary(res.data)
        })

        axios.get('/api/delivery-options?expand=estimatedDeliveryTime')
            .then((res) => {
                setDeliveryOptions(res.data)
            })
    }, [])

    return (
        <>
            <link rel="icon" href="/images/cart-favicon.png" />
            <title>Checkout</title>

            <CheckoutHeader />
            <div className="checkout-page">
                <div className="page-title">Review your order</div>

                <div className="checkout-grid">
                    <OrderSummary cart={cart} deliveryOptions={deliveryOptions} />

                    <PaymentSummary paymentSummary={paymentSummary} />
                    {/* {paymentSummary && (
                        <div className="payment-summary">
                            <div className="payment-summary-title">
                                Payment Summary
                            </div>

                            <div className="payment-summary-row">
                                <div>Items ({paymentSummary.totalItems}):</div>
                                <div className="payment-summary-money">${formatCurrency(paymentSummary.productCostCents)}</div>
                            </div>

                            <div className="payment-summary-row">
                                <div>Shipping &amp; handling:</div>
                                <div className="payment-summary-money">${formatCurrency(paymentSummary.shippingCostCents)}</div>
                            </div>

                            <div className="payment-summary-row subtotal-row">
                                <div>Total before tax:</div>
                                <div className="payment-summary-money">${formatCurrency(paymentSummary.totalCostBeforeTaxCents)}</div>
                            </div>

                            <div className="payment-summary-row">
                                <div>Estimated tax (10%):</div>
                                <div className="payment-summary-money">${formatCurrency(paymentSummary.taxCents)}</div>
                            </div>

                            <div className="payment-summary-row total-row">
                                <div>Order total:</div>
                                <div className="payment-summary-money">${formatCurrency(paymentSummary.totalCostCents)}</div>
                            </div>

                            <button className="place-order-button button-primary">
                                Place your order
                            </button>
                        </div>

                    )} */}


                </div>
            </div>
        </>
    )
}
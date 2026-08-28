import dayjs from 'dayjs'
import { formatCurrency } from '../../utils/formatCurrency'
import { DeliveryOptions } from './DeliveryOptions'
import axios from 'axios'

export function OrderSummary({ cart, deliveryOptions, loadCart }) {

    return (
        <>
            <div className="order-summary">

                {deliveryOptions.length > 0 && cart.map((cartItem) => {
                    const selectedOption = deliveryOptions.find((option) => {
                        return cartItem.deliveryOptionId === option.id
                    })

                    const deleteCartItem = async () => {
                        await axios.delete(`/api/cart-items/${cartItem.productId}`)
                    }
                    return (
                        <div key={cartItem.id} className="cart-item-container">
                            <div className="delivery-date">

                                Delivery date: {dayjs(selectedOption.estimatedDeliveryTimeMs).format('dddd, MMMM D')}
                            </div>

                            <div className="cart-item-details-grid">
                                <img className="product-image"
                                    src={cartItem.product.image} />

                                <div className="cart-item-details">
                                    <div className="product-name">
                                        {cartItem.product.name}
                                    </div>
                                    <div className="product-price">
                                        ${formatCurrency(cartItem.product.priceCents)}
                                    </div>
                                    <div className="product-quantity">
                                        <span>
                                            Quantity: <span className="quantity-label">{cartItem.quantity}</span>
                                        </span>
                                        <span className="update-quantity-link link-primary">
                                            Update
                                        </span>
                                        <span className="delete-quantity-link link-primary"
                                            onClick={deleteCartItem}>
                                            Delete
                                        </span>
                                    </div>
                                </div>

                                <DeliveryOptions deliveryOptions={deliveryOptions} cartItem={cartItem} loadCart={loadCart} />

                            </div>
                        </div>

                    )
                })}

            </div>
        </>
    )
}
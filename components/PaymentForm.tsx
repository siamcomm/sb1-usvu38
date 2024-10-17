"use client"

import { useState } from 'react'
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function PaymentForm({ amount }: { amount: number }) {
  const stripe = useStripe()
  const elements = useElements()
  const [error, setError] = useState<string | null>(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()

    if (!stripe || !elements) {
      return
    }

    setProcessing(true)

    const { error: backendError, clientSecret } = await fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ amount: amount * 100 }), // amount in cents
    }).then(res => res.json())

    if (backendError) {
      setError(backendError.message)
      setProcessing(false)
      return
    }

    const { error: stripeError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)!,
      },
    })

    if (stripeError) {
      setError(stripeError.message!)
    } else if (paymentIntent.status === 'succeeded') {
      // Handle successful payment here
      console.log('Payment succeeded')
    }

    setProcessing(false)
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Payment</CardTitle>
        <CardDescription>Complete your payment to finalize your membership</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit}>
          <CardElement />
          {error && <div className="text-red-500 mt-2">{error}</div>}
          <Button type="submit" disabled={!stripe || processing} className="mt-4">
            Pay ${amount}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}
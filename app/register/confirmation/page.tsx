import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function RegistrationConfirmation() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Registration Submitted</CardTitle>
          <CardDescription>Thank you for registering</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Your registration has been submitted successfully. An administrator will review your application and contact you soon.</p>
        </CardContent>
      </Card>
    </div>
  )
}
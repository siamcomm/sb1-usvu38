import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Members() {
  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Member Area</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>My Profile</CardTitle>
            <CardDescription>Manage your account information</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Edit Profile</Button>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Membership Status</CardTitle>
            <CardDescription>View and manage your membership</CardDescription>
          </CardHeader>
          <CardContent>
            <Button>Renew Membership</Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
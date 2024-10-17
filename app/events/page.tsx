import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Events() {
  const events = [
    { id: 1, title: 'Summer Meetup', date: '2023-07-15', description: 'Join us for our annual summer meetup!' },
    { id: 2, title: 'Tech Talk', date: '2023-08-05', description: 'Learn about the latest trends in technology.' },
    { id: 3, title: 'Networking Night', date: '2023-09-10', description: 'Expand your professional network.' },
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold">Upcoming Events</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {events.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.title}</CardTitle>
              <CardDescription>{event.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{event.description}</p>
              <Button className="mt-4">Register</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
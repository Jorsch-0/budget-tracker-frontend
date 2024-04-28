import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';

async function page() {
  const user = await currentUser();
  if (!user) {
    redirect('/sign-in');
  }

  return <div>page</div>;
}
export default page;

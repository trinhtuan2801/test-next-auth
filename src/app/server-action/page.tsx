import WhoAmIButton from '@/components/WhoAmIButton';
import { getServerSession } from 'next-auth';

export default function ServerActionPage() {
  const whoAmI = async () => {
    'use server';
    const session = await getServerSession();
    return session?.user?.name || 'Not logged in';
  };
  return (
    <div>
      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  );
}

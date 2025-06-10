import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid';

function SignOutButton() {
  return (
    <button className='flex items-center gap-4'> 
      <ArrowRightOnRectangleIcon className='h-5 w-5 text-primary-950  transition-colors' />
      <span>Sign out</span>
    </button>
  );
}

export default SignOutButton;

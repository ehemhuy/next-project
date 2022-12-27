import Logo from './Logo';
import SocialHeader from './SocialHeader';

export default function Header() {
  return (
    <div className="flex items-center border-b-1  bg-[#8797a8] py-2 px-[32px] sm:py-2 sm:px-[64px] lg:py-6 lg:px-[128px]">
      <Logo />
      <SocialHeader />
    </div>
  );
}

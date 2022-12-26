import Logo from './Logo';
import SocialHeader from './SocialHeader';

export default function Header() {
  return (
    <div className="flex items-center border-b-1  bg-[#8797a8] py-6 px-[128px]">
      <Logo />
      <SocialHeader />
    </div>
  );
}

import FacebookIcon from 'app/icons/FacebookIcon';
import GithubIcon from 'app/icons/GithubIcon';
import InstagramIcon from 'app/icons/InstagramIcon';
import LinkedInIcon from 'app/icons/LinkedInIcon';

export default function SocialHeader() {
  return (
    <div className="ml-auto flex cursor-pointer items-center justify-between gap-4">
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://github.com/ehemhuy"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://fb.com/huy100699"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <FacebookIcon />
      </a>
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://fb.com/huy100699"
        target={'_blank'}
        rel="noopener noreferrer"
      >
        <InstagramIcon />
      </a>
      <a className="rounded-md p-1 hover:bg-slate-200">
        <LinkedInIcon />
      </a>
    </div>
  );
}

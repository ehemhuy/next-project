import FacebookIcon from 'app/icons/FacebookIcon';
import GithubIcon from 'app/icons/GithubIcon';
import InstagramIcon from 'app/icons/InstagramIcon';
import LinkedInIcon from 'app/icons/LinkedInIcon';

export default function SocialHeader() {
  return (
    <div className="ml-auto flex cursor-pointer items-center justify-between gap-4">
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://github.com/ehemhuy/"
        target={'_blank'}
        rel="noopener noreferrer"
        title="https://github.com/ehemhuy/"
      >
        <GithubIcon />
      </a>
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://www.facebook.com/huy100699/"
        target={'_blank'}
        rel="noopener noreferrer"
        title="https://www.facebook.com/huy100699/"
      >
        <FacebookIcon />
      </a>
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://www.instagram.com/embune.pq/"
        target={'_blank'}
        rel="noopener noreferrer"
        title="https://www.instagram.com/embune.pq/"
      >
        <InstagramIcon />
      </a>
      <a
        className="rounded-md p-1 hover:bg-slate-200"
        href="https://www.linkedin.com/in/huy100699/"
        target={'_blank'}
        rel="noopener noreferrer"
        title="https://www.linkedin.com/in/huy100699/"
      >
        <LinkedInIcon />
      </a>
    </div>
  );
}

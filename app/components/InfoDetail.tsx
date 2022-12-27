export default function InfoDetail() {
  return (
    <div>
      <h1 className="font-mono text-[24px] sm:text-[36px]">
        Here is my portfolio
      </h1>
      <br />
      <p className="font-mono text-[16px] font-bold sm:text-[28px]">
        - Fullname: Phạm Quang Huy.
      </p>
      <p className="font-mono text-[16px] font-bold sm:text-[28px]">
        DOB: 10/06/1999.
      </p>
      <p className="font-mono text-[16px] font-bold sm:text-[28px]">
        - Position: Fullstack Developer in MISAJSC from Aug 2020.
      </p>
      <p className="font-mono text-[16px] font-bold sm:text-[28px]">
        - Skills: React, Javascript, Typescript, C# .Net, Nestjs, Nextjs,
        MongoDB, MySQL, Elasticsearch, Kafka, Teamwork, Code review...
      </p>
      <a
        href="https://www.topcv.vn/xem-cv/UwVQVQFRCgECBwAGBQcLUQ1ZUFwFBlNQAlABAg6640"
        target={'_blank'}
        className="hover:underline"
      >
        View my CV
      </a>
    </div>
  );
}

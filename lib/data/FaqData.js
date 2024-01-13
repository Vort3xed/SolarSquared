import Link from 'next/link';

const options = [
  {
    title: <>What do we do?</>,
    body: (
      <>
        Lorem ipsum dolor
      </>
    ),
  },
  {
    title: <>Where do we get money from?</>,
    body: (
      <>
        We get money from sponsors and from grant applications.
      </>
    ),
  },
  {
    title: <>Filler Question</>,
    body: (
      <>
        Check out this link! <br />

        <Link href="/">
          <a>Home</a>
        </Link>
      </>
    ),
  }

];

export default options;

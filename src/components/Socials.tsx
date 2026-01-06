import Link from "next/link";
import { FaYoutube, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

type SocialsProps = {
  containerStyles?: string;
};

const Socials = ({ containerStyles }: SocialsProps) => {
  return (
    <ul className={`${containerStyles}`}>
      <li>
        <Link href='https://www.facebook.com/profile.php?id=100089822972422' target='_blank'>
          <FaFacebook />
        </Link>
      </li>
      <li>
        <Link href='https://instagram.com/puresknandbeauty' target='_blank'>
          <FaInstagram />
        </Link>
      </li>
      {/* <li>
        <Link href='https://twitter.com/' target='_blank'>
          <FaTwitter />
        </Link>
      </li> */}
    </ul>
  );
};

export default Socials;

import { LazyLoadImage } from "react-lazy-load-image-component";
import { Link } from "react-router-dom";

interface SocialDetails {
  appLogo: string;
  altText: string;
  appUrl: string;
}

const SingleSocialApp: React.FC<SocialDetails> = ({
  appLogo,
  altText,
  appUrl,
}) => {
  return (
    <>
      {appUrl ? (
        <Link
          to={appUrl}
          target="blank"
          className="flex items-center justify-center w-11 h-11 rounded-full cursor-pointer bg-custom-light-gray"
        >
          <LazyLoadImage src={appLogo} alt={altText} className="w-4" />
        </Link>
      ) : (
        <Link
          to={appUrl}
          className="flex items-center justify-center w-11 h-11 rounded-full cursor-not-allowed bg-custom-light-gray"
        >
          <LazyLoadImage src={appLogo} alt={altText} className="w-4" />
        </Link>
      )}
    </>
  );
};

export default SingleSocialApp;

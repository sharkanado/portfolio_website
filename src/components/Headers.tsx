import {barlowBold} from "../styles/fonts";

const SectionHeader = ({children}: {children: React.ReactNode}) => {
  return (
    <p className={`${barlowBold.className} text-4xl pb-10 gradientText`}>
      {children}
    </p>
  );
};

export {SectionHeader};

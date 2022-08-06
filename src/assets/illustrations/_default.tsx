import { chakra, ChakraProps, ThemingProps } from "@chakra-ui/react";

interface IProps extends ChakraProps, ThemingProps {}

const DefaultSvg: React.FC<IProps> = (): JSX.Element => {
  return (
    <>
      <chakra.svg></chakra.svg>
    </>
  );
};

export default DefaultSvg;

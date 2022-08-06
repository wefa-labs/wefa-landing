import { Stack } from "@chakra-ui/react";

import { IFeatures } from "./features";

export const FeaturesCard: React.FC<IFeatures.IFeaturesCard> = ({
  header,
  body,
  footer,
  ...rest
}): JSX.Element => {
  return (
    <Stack {...rest}>
      {header && header}
      {body && body}
      {footer && footer}
    </Stack>
  );
};

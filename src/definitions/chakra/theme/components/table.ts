import { tableAnatomy as parts } from "@chakra-ui/anatomy";
import { mode } from "@chakra-ui/theme-tools";
import type {
  PartsStyleFunction,
  PartsStyleObject,
  SystemStyleObject,
} from "@chakra-ui/theme-tools";

const numericStyles: SystemStyleObject = {
  "&[data-is-numeric=true]": {
    textAlign: "end",
  },
};

const variantCelled: PartsStyleFunction<typeof parts> = (props) => {
  const { colorScheme: c, rounded: r } = props;
  return {
    table: {
      border: "1px solid",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      borderRadius: r,
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    thead: {
      tr: {
        th: {
          bg: mode(`${c}.100`, `${c}.900`)(props),
          color: mode(`${c}.500`, `${c}.400`)(props),
          borderTopRadius: r,
        },
      },
    },
    tbody: {
      color: mode(`${c}.700`, `${c}.50`)(props),
      //   color: mode(`${c}.600`, `${c}.400`)(props),
      //   tr: {
      //     "&:nth-of-type(even)": {
      //       "th, td": {
      //         borderBottomWidth: "1px",
      //         // borderColor: mode(`${c}.100`, `${c}.700`)(props),
      //       },
      //       td: {
      //         background: mode(`${c}.50`, `${c}.900`)(props),
      //       },
      //     },
      //   },
      tr: {
        "&:first-child": {
          td: {
            borderTop: "none",
          },
        },
      },
    },
    th: {
      // color: mode("gray.600", "gray.400")(props),
      // borderBottom: "1px",
      // borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      borderLeft: "1px solid",
      borderTop: "1px solid",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      "&:first-child": {
        borderLeft: "none",
      },
      ...numericStyles,
    },
  };
};

const variantStructured: PartsStyleFunction<typeof parts> = (props) => {
  const {
    colorScheme: c,
    rounded: r, // eslint-disable-line @typescript-eslint/no-unused-vars
  } = props;
  return {
    table: {
      border: "1px solid",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      // borderRadius: r,
      borderCollapse: "separate",
      borderSpacing: 0,
    },
    thead: {
      tr: {
        th: {
          bg: mode(`${c}.50`, `${c}.900`)(props),
          color: mode(`${c}.500`, `${c}.400`)(props),
          borderColor: mode(`${c}.100`, `${c}.700`)(props),
          // borderTopRadius: r,

          borderBottom: "1px solid",
          borderBottomColor: mode(`${c}.100`, `${c}.700`)(props),
          borderRight: "1px solid",
          borderRightColor: mode(`${c}.100`, `${c}.700`)(props),

          // borderTop: "1px solid",
          // borderTopColor: mode(`${c}.200`, `${c}.800`)(props),

          "&:last-child": {
            borderRight: "none",
            // borderTop: "none",
          },
        },
        "&:nth-child(2)": {
          th: {
            // borderTopWidth: "1px",
            // borderTopStyle: "solid",
            borderTopColor: mode(`${c}.200`, `${c}.700`)(props),
          },
        },
      },
    },
    tbody: {
      color: mode(`${c}.600`, `${c}.50`)(props),
      tr: {
        "&:first-child": {
          td: {
            borderTop: "none",
          },
        },
      },
    },
    th: {
      // color: mode("gray.600", "gray.400")(props),
      borderBottom: "1px",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      ...numericStyles,
    },
    td: {
      borderRight: "1px solid",
      borderTop: "1px solid",
      borderColor: mode(`${c}.100`, `${c}.700`)(props),
      "&:first-child": {
        // borderLeft: "none",
        // borderTop: "none",
      },
      "&:last-child": {
        borderRight: "none",
        // borderLeft: "none",
      },
    },
  };
};

const sizes: Record<string, PartsStyleObject<typeof parts>> = {
  sm: {
    thead: {
      tr: {
        th: {
          py: "3",
        },
      },
    },
  },
  md: {
    thead: {
      tr: {
        th: {
          pt: "5",
          pb: "4",
        },
      },
    },
  },
  lg: {
    thead: {
      tr: {
        th: {
          pt: "7",
          pb: "6",
        },
      },
    },
  },
};

const variants = {
  celled: variantCelled,
  structured: variantStructured,
};

const defaultProps = {
  rounded: "sm",
};

export default {
  variants,
  sizes,
  defaultProps,
};

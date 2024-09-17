import { SxProps, useTheme } from "@mui/material";

export const useTableOfContentsStyle = () => {
  const theme = useTheme();

  const wrapper: SxProps = {
    flex: 0.5,
  };

  const openedText: SxProps = {
    border: `1px solid ${theme.palette.warning.main}`,
    borderRadius: 1.5,
    p: 1,
  };

  const divider: SxProps = { mt: 2.5 };

  return { wrapper, divider, openedText };
};
import StyledComponentsRegistry from "@/lib/registry.lib";
import ThemeProviderWrapper from "@/providers/theme-wrapper.providers";
import type { Preview } from "@storybook/react";

const preview: Preview = {
  decorators: [
    (Story) => (
      <StyledComponentsRegistry>
        <ThemeProviderWrapper>
          <Story />
        </ThemeProviderWrapper>
      </StyledComponentsRegistry>
    ),
  ],
};

export default preview;
import { Button } from "../components/Button1";

const meta = {
  title: "UI/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;

export const Primary = {
  args: {
    children: "Primary Button",
    variant: "primary",
    size: "medium",
  },
};

export const Secondary = {
  args: {
    children: "Secondary Button",
    variant: "secondary",
    size: "medium",
  },
};

export const Accent = {
  args: {
    children: "Accent Button",
    variant: "accent",
    size: "medium",
  },
};

export const Small = {
  args: {
    children: "Small Button",
    size: "small",
  },
};

export const Large = {
  args: {
    children: "Large Button",
    size: "large",
  },
};

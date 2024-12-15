export interface ButtonProps {
  text: string;
  link: string;
  icon?: React.ReactNode;
}

export interface TextProps {
  text: string;
  style?: string;
  icon?: React.ReactNode;
}

export interface WrapperProps {
  children: React.ReactNode;
  style?: string;
}

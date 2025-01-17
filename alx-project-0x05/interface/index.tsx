import { ReactNode } from "react";

// ButtonProps
export interface ButtonProps {
  buttonLabel: string;
  buttonSize?: string;
  buttonBackgroundColor?: 'red' | 'blue' | 'orange' | 'green';
  action?: () => void;
}

// LayoutProps
export interface LayoutProps {
  children: ReactNode;
}

// PageRouteProps
export interface PageRouteProps {
  pageRoute: string;
}

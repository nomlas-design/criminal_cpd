import { useContext } from 'react';
import clsx from "clsx";

import { ThemeContext } from '../lib/themeContext'

export default function ThemeWrap(props) {
  const theme = useContext(ThemeContext);

  const mainClasses = clsx({
    dark: theme.theme === "dark",
    wrapper: true
  });

  return (
    <main className={mainClasses}>
      {props.children}
    </main>
  )
}
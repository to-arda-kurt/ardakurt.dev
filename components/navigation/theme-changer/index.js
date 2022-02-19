import Image from 'next/image';
import { useTheme } from 'next-themes';

export const ThemeChanger = () => {
  const { theme, setTheme } = useTheme();

  const themeHandler = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };

  return (
    <>
      <Image
        src={`/media/icons/toggle-${theme}.png`}
        alt={theme}
        onClick={themeHandler}
        height={`62px`}
        width={`62px`}
      />
    </>
  );
};

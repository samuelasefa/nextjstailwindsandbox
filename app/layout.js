import "./globals.css";
import MenuContextProvider from "./context/MenuContext";
import MainLayout from "./components/MainLayout";

export const metadata = {
  title: "We Are Ethiopian Developer",
  description: "This is a tutorial project from DevEmpower YouTube channel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <MenuContextProvider>
          <MainLayout>{children}</MainLayout>
        </MenuContextProvider>
      </body>
    </html>
  );
}

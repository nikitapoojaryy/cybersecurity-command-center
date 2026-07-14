import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {

  title:
    "Your Name | Cybersecurity Professional",

  description:
    "Cybersecurity professional specializing in GRC, risk management, security frameworks, and compliance.",


  openGraph: {

    title:
      "Cybersecurity Professional Portfolio",

    description:
      "Security governance, risk management and cybersecurity projects.",

  },

};



export default function RootLayout({

  children,

}: Readonly<{

  children: React.ReactNode;

}>) {


  return (

    <html lang="en">

      <body>

        {children}

      </body>

    </html>

  );

}
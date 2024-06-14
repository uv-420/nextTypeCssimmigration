import React from "react";
import { Metadata } from "next";
import Page from ".";

export const metadata: Metadata = {
  title: "DhiWise web app",
  description: "Web site created using create-react-app",
  //ogTitle:'...'
};

export default function VisaPage() {
  return <Page />;
}

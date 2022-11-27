import Link from "next/link";
import React from "react";

export default function Custom404() {
  return (
    <div id="errorPage">
      <h1>404</h1>
      <div>Aradığınızı Bulamadık....</div>
      <Link href={"/"}> Anasayfa</Link>
    </div>
  );
}

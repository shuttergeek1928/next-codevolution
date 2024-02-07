import Link from "next/link";
import React from "react";

export default function Folder1() {
  return (
    <div>
      <h1>Folder 1</h1>
      <Link href="/folder1/folder2">Folder 2</Link>
    </div>
  );
}

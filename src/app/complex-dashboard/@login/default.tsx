import Card from "@/app/components/card";
import Link from "next/link";
import React from "react";

export default function Notifications() {
  return (
    <Card>
      <h1>Notifications</h1>
      <Link href="/complex-dashboard/archived">Archived</Link>
    </Card>
  );
}

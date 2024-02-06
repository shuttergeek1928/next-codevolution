import React from "react";

export default function Docs({ params }: { params: { slug: string[] } }) {
  if (params.slug.length === 2) {
    return (
      <>
        <h1>
          Viewing docs for feature {params.slug[0]} & concept {params.slug[1]}
        </h1>
      </>
    );
  } else if (params.slug.length === 1) {
    return (
      <>
        <h1>Viewing docs for feature {params.slug[0]}</h1>
      </>
    );
  } else {
    return (
      <div>
        <h1>Not found!!!</h1>
      </div>
    );
  }
}

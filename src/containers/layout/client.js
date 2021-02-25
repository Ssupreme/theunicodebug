import React from "react"
const ClientSideOnlyLazy = React.lazy(() =>
  import("../../components/external")
)
const Client = () => {
  const isSSR = typeof window === "undefined"
  return (
    <>
      {!isSSR && (
        <React.Suspense fallback={<div />}>
          <ClientSideOnlyLazy />
        </React.Suspense>
      )}
    </>
  )
}

export default Client;
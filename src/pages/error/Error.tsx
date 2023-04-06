import { isRouteErrorResponse, Link, useRouteError } from 'react-router-dom';

export function Error() {
  const error = useRouteError();
  // console.error(error);

  if (isRouteErrorResponse(error)) {
    return (
      <div id="error-page">
        <h1>{error.statusText || error.status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.data}</i>
        </p>
        <Link to={'/'}>Go home</Link>
      </div>
    );
  }
  return <h1>Oops</h1>;
}

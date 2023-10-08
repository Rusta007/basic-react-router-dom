function Home() {
  return (
    <>
      <h1>About React Router Concepts</h1>
      <p>
        React Router is a library for handling client-side routing in React
        applications. It allows you to define how different URLs should map to
        different components and provides navigation elements like <b>Link</b>{" "}
        to enable easy movement between these components. The <b>Routes</b>{" "}
        component serves as a container for defining your routing configuration,
        and the <b>Route</b> components define individual routes with associated
        components. The <b>Outlet</b> component is used within layouts to render
        child routes. Together, these components help you create a navigational
        structure for your application.
      </p>
    </>
  );
}
export default Home;

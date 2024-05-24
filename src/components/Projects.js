import ecommerce from "../assets/ecommerce.jpg";

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <h3>Tchotchke Ecommerce App</h3>
      <p>
        Tchotchke Ecommerce App is a fullstack web application selling antiques
        and oddities.
      </p>
      <img src={ecommerce} alt="ecommerce-app" />
      <h3>Puppy Bowl</h3>
      <p>
        Puppy Bowl is a frontend application that lets potential dog adopters
        build rosters of cute puppies for a "puppy bowl".
      </p>
      <h3>Book Buddy</h3>
      <p>Book Buddy is a frontend application that allows readers to observe a list of all books in the library as well as checkout and return books.</p>
    </div>
  );
}

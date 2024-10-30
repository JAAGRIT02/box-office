export default function AppTitle(props) {
  const { title = 'Box-Office', subtitle = 'Search movies and actors' } = props; //destructuring from props on different line
  return (
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  );
}

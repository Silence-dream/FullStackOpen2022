export default function Total({ parts }) {
  let total = parts.map((item) => item.exercises).reduce((a, b) => a + b, 0);

  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  );
}

import Part from "./Part";
export default function Content(props) {
  return (
    <>
      {props.parts.map((item) => {
        return (
          <Part key={item.name} part={item.name} exercises={item.exercises} />
        );
      })}
    </>
  );
}

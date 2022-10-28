const Header = ({ course }) => <h1>{course}</h1>;

const Total = ({ parts }) => {
  const total = parts.reduce((prev, cur) => {
    return prev + cur.exercises;
  }, 0);
  return <p>Number of exercises {total}</p>;
};

const Part = ({ part }) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  );
};

const Content = ({ parts }) => {
  return (
    <>
      {parts.map((item) => (
        <Part part={item} key={item.id} />
      ))}
    </>
  );
};

const Course = ({ course: { name, id, parts } }) => (
  <>
    <Header course={name} />
    <Content parts={parts} />
    <Total parts={parts} />
  </>
);

const App = () => {
  const courses = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((item, index) => (
        <Course course={item} key={index} />
      ))}
    </div>
  );
};

export default App;

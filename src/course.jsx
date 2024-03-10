// Komponentti Part, joka renderöi yhden kurssin osan tiedot
const Part = ({ name, exercises }) => {
  return (
    <p>
      {name} {exercises}
    </p>
  );
};

// Komponentti Content, joka renderöi kurssin osat
const Content = ({ parts }) => {
  return (
    <div>
      {parts.map((part, index) => (
        <Part key={index} name={part.name} exercises={part.exercises} />
      ))}
    </div>
  );
};

// Komponentti Header, joka renderöi kurssin otsikon
const Header = ({ courseName }) => {
  return <h1>{courseName}</h1>;
};

// Komponentti Course, joka sisältää kurssin tiedot ja osat
const Course = ({ course }) => {
  // Laske yhteenlaskettu tehtävien määrä
  const totalExercises = course.parts.reduce((sum, part) => {
    return sum + (part.exercises || 0); // Käsittele tilanne, jossa exercises ei ole määritelty
  }, 0);

  return (
    <div>
      <Header courseName={course.name} />
      <Content parts={course.parts} />
      <p>
        <strong>Total exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

// Komponentti App, joka renderöi kurssin
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1,
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2,
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3,
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1,
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

  return (
    <div>
      {courses.map((course) => (
        <Course key={course.id} course={course} />
      ))}
    </div>
  );
};

export default App;

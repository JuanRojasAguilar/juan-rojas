import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";

const cardProperties = [
  {
    title: "My Goal",
    description: "As a professional I made an oath upon being responsible about my work. I strive to create efficient, inclusive products that allows people to express their work inside the software solutions that my wok provides. This is Achieved via Test Driven Development (TDD) and SOLID principles of clean code."
  },
  {
    title: "Vision",
    description: "By the year 2030 I want to have taken part open source programing language project.",
  },
  {
    title: "Why I do what I do?",
    description: "The programmers' community has been a source of inspiration, apps and histories that made me feel like part of something much bigger. And it's kinda true so I want to give back to this community in terms of knowledge, open source projects or just some minor bugfixes",
  },
];

const Styles = {
  cardHeader: `
    text-everforest-blue 
    font-bold 
    text-xl sm:text-3xl 
    bg-everforest-back-200 
    border-everforest-front 
    border border-b-0
  `,
  cardBody: `
    bg-everforest-back-500 
    text-everforest-front 
    border-everforest-front 
    border rounded-b-2xl 
    text-lg sm:text-xl
  `
}

const ObjectiveCards = () => {
  return (
    <>
    {
      cardProperties.map(({ title, description }) => (
        <Card
          isBlurred
          radius="lg"
          className="h-[200px] mb-4 last:mb-0 sm:w-[400px] sm:h-[400px]"
          key={title}
          classNames={{
            header: Styles.cardHeader,
            body: Styles.cardBody,
          }}
        >
          <CardHeader>
            <h4>{title}</h4>
          </CardHeader>
          <Divider />
          <CardBody>
            <p>{description}</p>
          </CardBody>
        </Card>
      ))
    }
  </>
  );
}

export default ObjectiveCards;


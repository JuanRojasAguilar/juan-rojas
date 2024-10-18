import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const cardProperties = [
  {
    title: "My Goal",
    description: "As a professional I made an oath upon being responsible about my work. I strive to create efficient, inclusive products that allows people to express their work inside the software solutions that my wok provides. This is Achieved via Test Driven Development (TDD) and SOLID principles of clean code."
  },
  {
    title: "Vision",
    description: "",
  },
  {
    title: "Why I do what I do?",
    description: "The programmers' community has been a source of inspiration, apps and histories that made me feel like part of something much bigger. And it's kinda true so I want to give back to this community in terms of knowledge, open source projects or just some minor bugfixes",
  },
];

const Objective = () => {
  return (
    <div className="w-full h-full p-8 pt-4 bg-everforest-back-200 text-everforest-blue flex flex-col gap-8 items-center">
      <h1 className="text-8xl font-semibold h-fit">About Me</h1>
      <div className="w-full flex-grow overflow-y-auto">
        {cardProperties.map(({ title, description }) => (
          <Card
            isBlurred
            radius="lg"
            className="h-[200px] mb-4 last:mb-0"
            key={title}
            classNames={{
              header: "text-everforest-blue font-bold text-xl bg-everforest-back-200 border-everforest-front border border-b-0",
              body: "bg-everforest-back-500 text-everforest-front border-everforest-front border rounded-b-2xl text-lg",
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
        ))}
      </div>
    </div>
  );
};

export default Objective;

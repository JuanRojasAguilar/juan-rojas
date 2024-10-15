import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";

const cardProperties = [
  {
    title: "My Goal",
    description: "",
  },
  {
    title: "Vision",
    description: "",
  },
  {
    title: "Why I do what I do?",
    description: "",
  },
];

const Objective = () => {
  return (
    <div className="w-full h-full bg-everforest-back-200 text-everforest-front flex flex-col gap-8 items-center"> 
      <h1 className="">About Me</h1>
      <div className="w-full h-full flex flex-col gap-8 overflow-scroll">
        {cardProperties.map(({ title, description }) => (
          <Card isBlurred radius="lg" className="">
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

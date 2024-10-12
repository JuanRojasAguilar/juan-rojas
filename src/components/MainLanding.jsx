"use client";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Button } from "@nextui-org/button";

const Styles = {
  container: `
    flex 
    flex-col 
    h-full w-full 
    justify-center 
    bg-gradient-to-b 
    from-everforest-back-200 from-70% 
    to-everforest-green 
    text-everforest-front
  `,
  button: `
    text-2xl text-inherit 
    hover:bg-everforest-back-50
    border-everforest-front
  `
}

const MainLanding = () => {
  return (
    <div className={Styles.container}>
      <h1 className="text-6xl h-1/2 content-end pl-2">
        Are you ready to find{" "}
        <span className="text-everforest-red font-bold">creative</span>{" "}
        solutions?
      </h1>
      <div className="h-1/2 flex flex-col justify-around">
        <p className="ml-2 text-3xl w-max">
          Juan Rojas
          <br />
          Software Engineer
        </p>
        <a className="self-center flex flex-col" href={"#about"}>
          <Button
            className={Styles.button}
            color="default"
            variant="bordered"
            radius="none"
            size="lg"
          >
            Explore
          </Button>
          <KeyboardDoubleArrowDownIcon
            className="self-center animate-pulse duration-32"
            fontSize="large"
          />
        </a>
      </div>
    </div>
  );
};

export default MainLanding;

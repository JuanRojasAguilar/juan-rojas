"use client";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import { Button } from "@nextui-org/button";

const Styles = {
  container: `
    flex 
    flex-col
    sm:flex-row
    h-full w-full 
    justify-center 
    bg-everforest-back-200
    text-everforest-front
  `,
  button: `
    text-2xl text-inherit
    sm:text-6xl
    sm:h-[80px]
    hover:bg-everforest-back-400
    border-everforest-front
  `
}

const MainLanding = () => {
  return (
    <div className={Styles.container}>
      <h1 className="text-6xl sm:text-9xl sm:font-bold h-2/5 sm:h-full content-end sm:content-center pl-8 sm:pl-20 sm:w-1/2">
        Are you ready to find{" "}
        <span className="text-everforest-red font-bold">creative</span>{" "}
        solutions?
      </h1>
      <div className="h-3/5 sm:h-full flex flex-col justify-around sm:justify-center sm:w-1/2">
        <p className="pl-8 text-4xl sm:text-7xl w-max sm:self-center sm:pb-12">
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

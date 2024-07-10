const Demo = () => {
  const handleSignUp = () => {
    // Handle the Sign Up functionality or navigation here
  };

  return (
    <div className="mb-36 flex flex-col items-center justify-center">
      <div className="h-[50rem] w-full">
        <div className="flex h-[25rem] w-full flex-col items-center justify-start bg-main-blue">
          <div className="mb-1 mt-20 text-title font-semibold text-main-black">
            Effortless Video Creation for Educators
          </div>
          <div className="mb-4 text-2xl font-medium text-main-black">
            Turn learning objectives into AI-powered videos that empower your
            students
          </div>
          <img
            src="assets/images/LandingPagePlaceholder.png"
            alt="Placeholder"
            className="mt-3 w-[75rem]"
          />
        </div>
      </div>

      <div className="mx-auto flex w-full px-28 text-base font-normal text-main-black">
        In today&apos;s digital learning landscape, educators face the challenge
        of engaging students while maximizing their valuable time. <br /> <br />
        Crafty is here to revolutionize the way you create educational videos.
        We are an AI-powered platform dedicated to empowering educators with a
        simple and efficient solution. <br /> <br />
        Our mission is to unlock your teaching potential by automating the video
        creation process. Simply provide your learning objective, and Crafty
        will generate a captivating script, high-quality slides, and even
        narration – all tailored to your teaching style and audience. <br />{' '}
        <br />
        Focus on what matters most – your students. With Crafty, you can spend
        less time editing and more time crafting engaging lessons that inspire
        and educate.
      </div>

      <button
        type="button"
        className="mt-16 h-10 w-40 rounded-lg bg-button-blue font-Inter text-lg font-medium text-main-white"
        onClick={handleSignUp}
      >
        Sign Up
      </button>
    </div>
  );
};

export default Demo;

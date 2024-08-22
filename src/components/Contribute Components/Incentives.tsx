import React from "react";

const Incentives = () => {
  return (
    <div className="font-raleway w-full">
      <h1 className="text-3xl font-semibold mb-4">
        Incentives for Contribution
      </h1>
      <p className="text-xl font-normal leading-6 mb-4">
        We value our contributors and want to recognize their efforts. Here are
        some incentives for contributing to Crafty:
      </p>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-[26px] font-semibold">Recognition</h3>
          <ul>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Contributor Acknowledgement:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                All contributors will be listed in the CONTRIBUTORS.md file in
                the repository.
              </p>
            </li>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Shout-outs:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Major contributions will be acknowledged in our project updates
                and on social media.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">Career Benefits</h3>
          <ul>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Portfolio Building:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Contributions to Crafty can be showcased in your professional
                portfolio, demonstrating your skills and experience.
              </p>
            </li>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Networking Opportunities:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Engage with a community of like-minded developers and expand
                your professional network.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">
            Learning and Development
          </h3>
          <ul>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Skill Enhancement:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Gain hands-on experience with cutting-edge technologies and best
                practices in software development.
              </p>
            </li>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Mentorship:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Receive guidance and feedback from experienced maintainers and
                contributors.
              </p>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-y-2">
          <h3 className="text-[26px] font-semibold">Exclusive Benefits</h3>
          <ul>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Early Access:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Get early access to new features and updates before they are
                released to the public.
              </p>
            </li>
            <li>
              <p className="text-xl font-bold leading-6 inline">
                &#8226; Swag:
              </p>
              <p className="text-xl font-normal leading-6 inline">
                {" "}
                Active contributors may receive project-branded swag as a token
                of our appreciation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Incentives;

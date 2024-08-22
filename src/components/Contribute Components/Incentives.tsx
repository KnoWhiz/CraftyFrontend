import React from 'react'

const Incentives = () => {
  return (
    <div className="font-raleway w-full">
      <h1 className="mb-4 text-3xl font-semibold">
        Incentives for Contribution
      </h1>
      <p className="mb-4 text-xl font-normal leading-6">
        We value our contributors and want to recognize their efforts. Here are
        some incentives for contributing to Crafty:
      </p>
      <div className="flex flex-col gap-y-4">
        <div className="flex flex-col gap-y-1">
          <h3 className="text-[26px] font-semibold">Recognition</h3>
          <ul>
            <li>
              <p className="inline text-xl font-bold leading-6">
                &#8226; Contributor Acknowledgement:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
                All contributors will be listed in the CONTRIBUTORS.md file in
                the repository.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-bold leading-6">
                &#8226; Shout-outs:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
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
              <p className="inline text-xl font-bold leading-6">
                &#8226; Portfolio Building:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
                Contributions to Crafty can be showcased in your professional
                portfolio, demonstrating your skills and experience.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-bold leading-6">
                &#8226; Networking Opportunities:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
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
              <p className="inline text-xl font-bold leading-6">
                &#8226; Skill Enhancement:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
                Gain hands-on experience with cutting-edge technologies and best
                practices in software development.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-bold leading-6">
                &#8226; Mentorship:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
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
              <p className="inline text-xl font-bold leading-6">
                &#8226; Early Access:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
                Get early access to new features and updates before they are
                released to the public.
              </p>
            </li>
            <li>
              <p className="inline text-xl font-bold leading-6">
                &#8226; Swag:
              </p>
              <p className="inline text-xl font-normal leading-6">
                {' '}
                Active contributors may receive project-branded swag as a token
                of our appreciation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Incentives

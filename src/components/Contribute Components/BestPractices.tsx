import React from 'react'

const BestPractices = () => {
  return (
    <div className="font-raleway w-full">
      <h1 className="mb-4 text-3xl font-semibold">Best Practices</h1>
      <div className="flex flex-col gap-y-1">
        <ul>
          <li>
            <p className="inline text-xl font-bold leading-6">
              &#8226; Write Clear Commit Messages:
            </p>
            <p className="inline text-xl font-normal leading-6">
              {' '}
              Commit messages should be clear and descriptive. Follow the{' '}
            </p>
            <a
              href="https://www.conventionalcommits.org/en/v1.0.0/"
              className="inline cursor-pointer text-xl font-bold text-button-blue underline"
              target="_blank"
            >
              Conventional Commits specification
            </a>
            <p className="inline text-xl font-normal leading-6">.</p>
          </li>
          <li>
            <p className="inline text-xl font-bold leading-6">
              &#8226; Keep Changes Small and Focused:
            </p>
            <p className="inline text-xl font-normal leading-6">
              {' '}
              Small, focused changes are easier to review and integrate.
            </p>
          </li>
          <li>
            <p className="inline text-xl font-bold leading-6">
              &#8226; Write Tests:
            </p>
            <p className="inline text-xl font-normal leading-6">
              {' '}
              Ensure your changes are covered by tests and that all tests pass
              before submitting your pull request.
            </p>
          </li>
          <li>
            <p className="inline text-xl font-bold leading-6">
              &#8226; Follow Coding Standards:
            </p>
            <p className="inline text-xl font-normal leading-6">
              {' '}
              Ensure your code adheres to the project&apos;s coding style and
              conventions.
            </p>
          </li>
          <li>
            <p className="inline text-xl font-bold leading-6">
              &#8226; Be Respectful and Professional:
            </p>
            <p className="inline text-xl font-normal leading-6">
              {' '}
              We strive to maintain a welcoming and inclusive community. Be
              respectful in all interactions with other contributors and
              maintainers.
            </p>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BestPractices

import React from 'react'
import DocLine from '../../Documentation Components/DocLine'

const SubmittingContribution = () => {
  return (
    <div className="w-full">
      <h3 className="mb-6 text-[26px] font-semibold">
        Submitting Your Contribution
      </h3>
      <div className="flex w-full flex-col items-start justify-start gap-y-2 pl-3">
        <div>
          <h3 className="inline text-2xl font-bold">
            1. Commit Your Changes:{' '}
          </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Write a clear and concise commit message:
          </h3>
        </div>
        <DocLine
          lines={[
            'git add .',
            'git commit -m &quot;Add feature: Your feature description&quot;',
          ]}
          label={''}
        />
        <div>
          <h3 className="inline text-2xl font-bold">2. Push to Your Fork: </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Push your changes to your forked repository:
          </h3>
        </div>
        <DocLine
          lines={['git push origin feature/your-feature-name']}
          label={''}
        />
        <div>
          <h3 className="inline text-2xl font-bold">
            3. Open a Pull Request:{' '}
          </h3>
          <h3 className="inline text-2xl font-medium">
            {' '}
            Navigate to the original repository and click the &quot;New Pull
            Request&quot; button. Fill in the template with relevant details
            about your changes.
          </h3>
        </div>
      </div>
    </div>
  )
}

export default SubmittingContribution

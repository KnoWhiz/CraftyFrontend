import React from "react";
import DocLine from "./DocLine";
import DocLabel from "./DocLabel";

const Readme = () => {
  return (
    <div className="ml-60 my-24">
      <div className="flex flex-col justify-center items-start h-1/3 w-5/6 gap-y-6 font-Inter">
        <h1 className="text-title font-semibold">ReadMe</h1>

        <h2 className="text-3xl text-main-green font-normal leading-tight">
          Installation
        </h2>

        <DocLine
          lines={[
            "conda create --name crafty python=3.11",
            "conda activate crafty",
            "pip install -r requirements.txt",
          ]}
          label=""
        />

        <DocLine
          lines={["# e.g. on macOS or Linux", "brew install --cask mactex"]}
          label="install MacTex or TeX Live"
        />

        <DocLine
          lines={["# e.g. on macOS or Linux", "brew install ffmpeg"]}
          label="install ffmpeg"
        />

        <div className="text-main-black">
          <p className="inline">Once installed, you can set the </p>
          <DocLabel label="IMAGEIO_FFMPEG_EXE" />
          <p className="inline">
            {" "}
            environment variable as indicated in your script. This variable
            points to the FFmpeg executable, which is typically{" "}
          </p>
          <DocLabel label="/usr/local/bin/ffmpeg" />
          <p className="inline">
            {" "}
            on macOS, but the provided script suggests a Homebrew-specific path
            under{" "}
          </p>
          <DocLabel label="/opt/homebrew/bin/ffmpeg" />
          <p className="inline"> . Verify the correct path using: </p>
        </div>

        <DocLine lines={[]} label="" />

        <DocLine
          lines={[
            "export IMAGEIO_FFMPEG_EXE=$(which ffmpeg)",
            'os.environ["IMAGEIO_FFMPEG_EXE"] = "/opt/homebrew/bin/ffmpeg"',
          ]}
          label="Then update the environment variable accordingly in your Python script
          or set it in your shell profile:"
        />

        <p>Install OpenLimit</p>
        <p>
          The latest version of openlimit is not available on pypi, and the
          version on pypi doesn&apos;t compatible with Python 3.11+
        </p>
        <p>
          If you need to install the latest version. Execute the following
          commands anywhere in your workspace to install openlimit.
        </p>
        <DocLine
          lines={[
            "git clone https://github.com/shobrook/openlimit.git",
            "cd openlimit",
            "pip install .",
          ]}
          label=""
        />

        <h2 className="mt-10 text-3xl text-main-green font-normal leading-tight">
          Set OPENAI_API_KEY
        </h2>
        <DocLine
          lines={[
            'cd "<project_dir>"',
            "# Should replace sk-xxx to a real openai api key",
            'echo "OPENAI_API_KEY=sk-xxx" > .env',
          ]}
          label=""
        />
      </div>
    </div>
  );
};

export default Readme;

import React from "react";
import DocLine from "./DocLine";
import DocLabel from "./DocLabel";

const Cli = () => {
  return (
    <div className="ml-60 my-24">
      <div className="flex flex-col justify-center items-start h-1/3 w-5/6 gap-y-20 font-Inter">
        <div className="text-main-black">
          <h1 className="text-title font-semibold">CLI Commands</h1>
          <p className="inline">Crafty provides 2 main commands: </p>
          <DocLabel label="create" />
          <p className="inline"> and </p>
          <DocLabel label="step" />
        </div>

        <div className="flex flex-col w-full gap-y-6">
          <h2 className="text-3xl text-main-green font-normal leading-tight">
            Create
          </h2>

          <div>
            <p className="inline">The </p>
            <DocLabel label="create" />
            <p className="inline">
              {" "}
              command is used to create a new course video from given topic. To
              use the{" "}
            </p>
            <DocLabel label="create" />
            <p className="inline"> command, simply type:</p>
          </div>

          <DocLine
            lines={[
              'python Crafty/cli.py create --topic "I would like to learn about ..."',
            ]}
            label=""
          />

          <div>
            <p className="inline">The </p>
            <DocLabel label="create" />
            <p className="inline">
              {" "}
              command has several optional parameters that can be used to
              customize the behavior of the command. Here&apos;s a brief
              description of each:
            </p>
          </div>

          <ul className="list-disc pl-4 space-y-3">
            <li>
              <DocLabel label="--temperature <float>" />
              <p className="inline">
                : This parameter sets the temperature for the basic and advanced
                model. The default value is 0.
              </p>
            </li>
            <li>
              <DocLabel label="--creative_temperature <float>" />
              <p className="inline">
                : This parameter sets the temperature for the creative model.
                The default value is 0.5.
              </p>
            </li>
            <li>
              <DocLabel label="--slides_template_file <str>" />
              <p className="inline">
                : This parameter sets the temperature for the creative model.
                The default value is 0.5.
              </p>
            </li>
            <li>
              <DocLabel label="--slides_style <str>" />
              <p className="inline">
                : This parameter specifies the style of the slides. It should
                only be used if a template file is not provided. The default
                value is ‘simple’.
              </p>
            </li>
            <li>
              <DocLabel label="--content_slide_pages <int>" />
              <p className="inline">
                : This parameter sets the number of pages to generate for
                content slides. The default value is 30.
              </p>
            </li>
            <li>
              <DocLabel label="--parallel_processing" />
              <p className="inline">
                : This flag indicates whether to use parallel processing in the
                generation. It does not require a value. If used, it sets the
                value to True.
              </p>
            </li>
            <li>
              <DocLabel label="--advanced_model" />
              <p className="inline">
                : This flag indicates whether to use the advanced model for note
                expansion. It does not require a value. If used, it sets the
                value to True.
              </p>
            </li>
            <li>
              <DocLabel label="--sections_per_chapter <int>" />
              <p className="inline">
                : This parameter sets the number of sections per chapter. The
                default value is 20.
              </p>
            </li>
            <li>
              <DocLabel label="--max_note_expansion_words <int>" />
              <p className="inline">
                : This parameter sets the maximum number of words for note
                expansion. The default value is 500.
              </p>
            </li>
          </ul>

          <p className="inline">These parameters can be used as follows:</p>

          <DocLine
            lines={[
              "python Crafty/cli.py create --topic <topic> --temperature <float> --creative_temperature <float> --slides_template_file... ",
            ]}
            label=""
          />

          <div>
            <p className="inline">Replace </p>
            <DocLabel label="<topic>" />
            <p className="inline">, </p>
            <DocLabel label="<float>" />
            <p className="inline">, </p>
            <DocLabel label="<str>" />
            <p className="inline">, and </p>
            <DocLabel label="<int>" />
            <p className="inline">
              {" "}
              with the actual values you want to use. If you want to use the{" "}
            </p>
            <DocLabel label="--parallel_processing" />
            <p className="inline"> or </p>
            <DocLabel label="--advanced_model" />
            <p className="inline">
              {" "}
              flags, simply include them in the command without a value.
            </p>
          </div>
        </div>

        <div className="flex flex-col w-full gap-y-6">
          <h2 className="text-3xl text-main-green font-normal leading-tight">
            Step
          </h2>

          <div>
            <p className="inline">The </p>
            <DocLabel label="step" />
            <p className="inline">
              {" "}
              command is used to execute a specific step in the course creation
              process. The steps should be executed in the following order:
            </p>
          </div>

          <ol className="list-decimal pl-4 space-y-1">
            <li>
              <DocLabel label="chapter" />
            </li>
            <li>
              <DocLabel label="section" />
            </li>
            <li>
              <DocLabel label="note" />
            </li>
            <li>
              <DocLabel label="slide" />
            </li>
            <li>
              <DocLabel label="script" />
            </li>
            <li>
              <DocLabel label="voice" />
            </li>
            <li>
              <DocLabel label="video" />
            </li>
          </ol>

          <p className="inline">Here&apos;s how to use each step:</p>
        </div>
      </div>
    </div>
  );
};

export default Cli;

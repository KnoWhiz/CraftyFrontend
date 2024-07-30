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

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Chapter</h4>

            <p className="inline">
              You should always start with chapter command to create meta data
              and chapters for a given learning topic.
            </p>
            <DocLine
              lines={["python Crafty/cli.py step chapter --topic <topic>"]}
              label=""
            />
            <p className="inline">
              After the first step, each step will prompt you the next step to
              execute in the console. Please follow the instructions to
              continue.
            </p>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Section</h4>
            <p className="inline">
              Start from second step, you are going to provide the course_id
              instead of topic to continue using existing materials.
            </p>
            <DocLine
              lines={[
                "python Crafty/cli.py step section --course_id <course_id> --sections_per_chapter 20",
              ]}
              label=""
            />
            <div>
              <DocLabel label="--sections_per_chapter" />
              <p className="inline">
                {" "}
                is the number of sections you want to create for each chapter.
                The default value is 20.
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Note</h4>

            <div>
              <p className="inline">
                To generate notes for the sections of a course, use the{" "}
              </p>
              <DocLabel label="note" />
              <p className="inline">
                {" "}
                step. Starting from notes step, you must use{" "}
              </p>
              <DocLabel label="--chapter" />
              <p className="inline">
                {" "}
                to specify which chapter you want to generate.
              </p>
            </div>
            <DocLine
              lines={[
                "python Crafty/cli.py step note --course_id <course_id> --max_note_expansion_words 500 --chapter 0",
              ]}
              label=""
            />
            <div>
              <DocLabel label="--max_note_expansion_words" />
              <p className="inline">
                {" "}
                is the maximum number of words to expand the notes. The default
                value is 500.
              </p>
              <br />
              <DocLabel label="--chapter" />
              <p className="inline">
                is the chapter index to generate notes for. The chapter number
                start from 0. Here is an example of notes generation for a
                course with 3 chapters
              </p>
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Slide</h4>

            <div>
              <p className="inline">
                To create slides for the notes of a course, use the{" "}
              </p>
              <DocLabel label="slide" />
              <p className="inline"> step. </p>
            </div>
            <DocLine
              lines={[
                "python Crafty/cli.py step slide --course_id <course_id> --slides_template_file 3 --content_slide_pages 30 --chapter 0",
              ]}
              label=""
            />
            <div className="flex flex-col w-full gap-y-2">
              <div>
                <DocLabel label="--slides_template_file" />
                <p className="inline">
                  {" "}
                  is the template file to use for generating slides. The default
                  value is 3.
                </p>
                <br />
              </div>
              <div>
                <DocLabel label="--content_slide_pages" />
                <p className="inline">
                  {" "}
                  is the number of pages to generate for content slides. The
                  default value is 30.
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Script</h4>

            <div>
              <p className="inline">
                To create scripts for the slides of a course, use the{" "}
              </p>
              <DocLabel label="script" />
              <p className="inline"> step. </p>
            </div>
            <DocLine
              lines={[
                "python Crafty/cli.py step script --course_id <course_id> --chapter 0",
              ]}
              label=""
            />
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Voice</h4>

            <div>
              <p className="inline">
                To generate voice for reading the scripts of a course, use the{" "}
              </p>
              <DocLabel label="voice" />
              <p className="inline"> step. </p>
            </div>
            <DocLine
              lines={[
                "python Crafty/cli.py step voice --course_id <course_id> --chapter 0",
              ]}
              label=""
            />
          </div>

          <div className="flex flex-col w-full gap-y-2">
            <h4 className="text-2xl">Video</h4>

            <div>
              <p className="inline">
                Finally, to create videos from the voices and slides of a
                course, use the{" "}
              </p>
              <DocLabel label="video" />
              <p className="inline"> step. </p>
            </div>
            <DocLine
              lines={[
                "python Crafty/cli.py step video --course_id <course_id> --chapter 0",
              ]}
              label=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cli;
